import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

function MovieList({ listTitle, movies }) {
	const [hoveredId, setHoveredId] = useState(null);
	const [clickedId, setClickedId] = useState(null);

	// const clickedEle = useSelector(store => store.movies.clickedEle);
	console.log("card clicked");

	const scrollContainerRef = useRef(null);

	const handleScrollRight = () => {
		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			scrollContainer.style.scrollBehavior = 'smooth'
			scrollContainer.scrollLeft += 300; // Adjust the scroll distance as needed
		}
	};
	
	const handleScrollLeft = () => {
		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			scrollContainer.style.scrollBehavior = 'smooth'
			scrollContainer.scrollLeft -= 300; // Adjust the scroll distance as needed
		}
	};
	

	return (
		<div className="px-6 mt-[10px] xl:mt-4 md:px-[40px] relative">
			<h1 className="text-lg md:text-3xl font-bold pt-4 pb-2 text-white">
				{listTitle}
			</h1>
			<div
				ref={scrollContainerRef}
				className="movieList flex flex-shrink-0 gap-2 overflow-x-auto overflow-y-hidden"
			>
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
				<button onClick={handleScrollLeft} className="text-white scale-[2.5] absolute ml-[-1%]  top-[56%]"><IoIosArrowDropleft /></button>
				<button onClick={handleScrollRight} className="text-white scale-[2.5] absolute top-[56%] right-[1.4%]"><IoIosArrowDropright /></button>
			</div>
		</div>
	); 
}

export default MovieList;
