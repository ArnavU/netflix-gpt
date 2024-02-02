import { useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
	const [hoveredId, setHoveredId] = useState(null);
	const [clickedId, setClickedId] = useState(null);

	return (
		<div className="p-6 md:pl-[40px]">
			<h1 className="text-lg md:text-3xl font-bold py-4 text-white">{title}</h1>
			<div className="flex flex-shrink-0 gap-2 overflow-x-auto overflow-y-hidden">
				{movies?.map((movie) => {
					return (
						<MovieCard
							key={movie.id} 
							movieId={movie.id}
							setHoveredId={setHoveredId}
							hoveredId={hoveredId}
							posterPath={movie.poster_path}
							setClickedId={setClickedId}
							clickedId={clickedId}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default MovieList;
