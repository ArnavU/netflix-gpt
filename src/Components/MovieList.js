import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
	const [hoveredId, setHoveredId] = useState(null);
	const [clickedId, setClickedId] = useState(null);
	const [clickedCardDescription, setClickedCardDescription] = useState(null);

	if(clickedId) {
console.log("card clicked");
	}

	useEffect(()=> {
		console.log("uesEffect of MovieList");
	}, [])
	
	return (
		<div className="p-6 md:pl-[40px]">
			<h1 className="text-lg md:text-3xl font-bold py-4 text-white">
				{title}
			</h1>
			<div className="flex flex-shrink-0 gap-2 overflow-x-auto overflow-y-hidden">
				{movies?.map((movie) => {
					const {
						id,
						title,
						original_language,
						overview,
						release_date,
						vote_average,
					} = movie;
					return (
						<MovieCard
							key={movie.id}
							movieId={movie.id}
							setHoveredId={setHoveredId}
							hoveredId={hoveredId}
							posterPath={movie.poster_path}
							setClickedId={setClickedId}
							clickedId={clickedId}
							description={[id, title, original_language, overview, release_date, vote_average]}
							setClickedCardDescription={setClickedCardDescription}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default MovieList;
