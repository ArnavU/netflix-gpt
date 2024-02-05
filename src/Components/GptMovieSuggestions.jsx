import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useEffect } from "react";

const GptMovieSuggestions = () => {

	const { movieResults, movieNames } = useSelector((store) => store.gpt);
	if (!movieNames) return null;

	return (
		<div className="md:p-4 m-4 bg-black/80 text-white">
			<div>
				{movieNames.map((movieName, index) => (
					<MovieList
						listTitle={movieName}
						movies={movieResults[index]}
					/>
				))}
			</div>
		</div>
	);
};

export default GptMovieSuggestions;
