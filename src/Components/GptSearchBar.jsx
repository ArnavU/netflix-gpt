import { useDispatch, useSelector } from "react-redux";
import LANG from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
	const langKey = useSelector((store) => store.config.lang);
	const searchText = useRef(null);
	const dispatch = useDispatch();

	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
			API_OPTIONS
		);

		const jsonData = await data.json();
		return jsonData.results;
	};

	const handleGptSearchClick = async () => {
		console.log(searchText.current.value);
		// Make an API call to GPT API and get Movie Results

		const gptQuery = `Act as a Movie Recommendation System and sugest some movies for the query: ${searchText.current.value}. Only give me names of 5 movies, comma seperated like the example result give ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

		const gptResults = await openai.chat.completions.create({
			messages: [{ role: "user", content: gptQuery }],
			model: "gpt-3.5-turbo",
		});

		// const gptResults = {
		// 	choices: [
		// 		{
		// 			message: {
		// 				content:
		// 					"Andaz Apna Apna, Chupke Chupke, Jaane Bhi Do Yaaro, Amar Akbar Anthony, Hera Pheri",
		// 			},
		// 		},
		// 	],
		// };

		if (!gptResults.choices) {
			// TODO: Write Error handling
		}

		// '[Mad Max: Fury Road', 'The Dark Knight',' John Wick', 'Die Hard', 'Mission: Impossible - Fallout']
		console.log(gptResults.choices?.[0]?.message.content);
		const gptMovies = gptResults.choices?.[0]?.message.content.split(", ");

		// for each movie i will search TMDB API
		const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
		// [promise1, promise2, promise2, promise4, promise 5]

		const tmdbResults = await Promise.all(promiseArray);
		console.log(tmdbResults);

		dispatch(addGptMovieResult({movieNames: gptMovies,movieResults: tmdbResults}));
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
