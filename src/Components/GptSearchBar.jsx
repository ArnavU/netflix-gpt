import { useDispatch, useSelector } from "react-redux";
import LANG from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAi";
import { geminiAi } from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = ({setIsLoading}) => {
	const langKey = useSelector((store) => store.config.lang);
	const searchText = useRef(null);
	const dispatch = useDispatch();

	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			`${process.env.REACT_APP_TMDB_PROXY_URL}/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
			API_OPTIONS 
		);

		const jsonData = await data.json();
		return jsonData.results;
	};

	const handleGptSearchClick = async () => {
		setIsLoading(true);
		
		const gptInstructions = `Act as a Movie Recommendation System and sugest some movies for the query. Only give me names of 5 movies, comma seperated like the example result give ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

		const response = await geminiAi.models.generateContent({
			model: "gemini-2.5-flash",
			contents: searchText.current.value,
			config: {
			  	systemInstruction: gptInstructions,
			},
		});
		
		const gptMovies = response.text.split(", ");
		console.log("GPT MOVIES GEMINI: ", gptMovies);

		// for each movie i will search TMDB API
		const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
		// [promise1, promise2, promise2, promise4, promise 5]

		const tmdbResults = await Promise.all(promiseArray);
		console.log(tmdbResults);

		dispatch(addGptMovieResult({movieNames: gptMovies,movieResults: tmdbResults}));

		setIsLoading(false); 
	};

	return (
		<div className="md:pt-[15vh] pt-[20%] flex justify-center">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="bg-black w-full md:w-1/2 grid grid-cols-12"
			>
				<input
					ref={searchText}
					type="text"
					className="p-4 m-4 col-span-8 rounded-md text-[10px] md:text-[24px]"
					placeholder={LANG[langKey]?.gptSearchPlaceHolder}
				/>
				<button
					className="py-2 px-4 m-4 text-[10px] md:text-[24px] col-span-4 bg-red-700 text-white rounded-lg"
					onClick={handleGptSearchClick}
				>
					{LANG[langKey]?.search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
