import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useEffect } from "react";

const GptMovieSuggestions = ({ isLoading }) => {
	const { movieResults, movieNames } = useSelector((store) => store.gpt);

	const dummyNames = [1, 2, 3, 4, 5];

	console.log("GptMovieSuggestions movieNames: ", movieNames);

	return (
		<div>
			{isLoading && (
				<div className="md:p-4 m-4 bg-black/80 text-white">
					{dummyNames.map((movieName, index) => (
						<MovieList key={index} listTitle={""} movies={null} />
					))}
				</div>)
			}
			{movieNames && (
				<div className="md:p-4 m-4 bg-black/80 text-white">
					{movieNames.map((movieName, index) => (
						<MovieList
							listTitle={movieName}
							movies={movieResults[index]}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default GptMovieSuggestions;
