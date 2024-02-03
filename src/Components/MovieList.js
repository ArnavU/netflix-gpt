import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

function MovieList({ listTitle, movies }) {
	const [hoveredId, setHoveredId] = useState(null);
	const [clickedId, setClickedId] = useState(null);

	// const clickedEle = useSelector(store => store.movies.clickedEle);

	console.log("card clicked");

	useEffect(() => {
		console.log("uesEffect of MovieList");
	}, []);

	return (
		<div className="p-6 md:pl-[40px] relative">
			<h1 className="text-lg md:text-3xl font-bold py-4 text-white">
				{listTitle}
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
							description={[
								id,
								title,
								original_language,
								overview,
								release_date,
								vote_average,
							]}
							listTitle={listTitle}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default MovieList;
