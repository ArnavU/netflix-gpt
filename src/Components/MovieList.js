import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import MovieCardShimmer from "./MovieCardShimmer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

function MovieList({ listTitle, movies }) {
	const [hoveredId, setHoveredId] = useState(null);
	const [clickedId, setClickedId] = useState(null);
	const [pageNoNowPlaying, setPageNoNowPlaying] = useState(1);
	const [prevPageNoNowPlaying, setPrevPageNoNowPlaying] = useState(1);

	useNowPlayingMovies(
		pageNoNowPlaying,
		prevPageNoNowPlaying,
		setPrevPageNoNowPlaying
	);

	useEffect(() => {
		// Create a new IntersectionObserver
		let options = {
			root: document.querySelector("#scrollArea"),
			rootMargin: "0px",
			threshold: 1.0,
		};
		
		const callBack = (entries) => {
			// Loop over the entries
			entries.forEach((entry) => {
				// If the element is intersecting (i.e., in the viewport)
				if (entry.isIntersecting) {
					// Run your function here
					console.log("Element is in viewport");
					setPageNoNowPlaying(pageNoNowPlaying => pageNoNowPlaying+1)
				}
			});
		};

		const observer = new IntersectionObserver(callBack);



		// Select the element you want to observe
	
		const targetElement = document.querySelector(".secondShimmer");

		// Start observing the target element
		if(targetElement)
			observer.observe(targetElement);
	}, [movies]);

	const scrollContainerRef = useRef(null);

	const handleScrollRight = () => {
		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			scrollContainer.style.scrollBehavior = "smooth";
			scrollContainer.scrollLeft += 300; // Adjust the scroll distance as needed
		}
	};

	const handleScrollLeft = () => {
		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			scrollContainer.style.scrollBehavior = "smooth";
			scrollContainer.scrollLeft -= 300; // Adjust the scroll distance as needed
		}
	};

	const ShimmerLoader = ({ count }) => {
		const shimmerItems = [];
		for (let i = 0; i < count; i++) {
			shimmerItems.push(<MovieCardShimmer key={i} />);
		}
		return shimmerItems;
	};

	return (
		<div className="px-6 mt-[10px] xl:mt-4 md:px-[40px] relative pb-[20px] ">
			<h1 className="text-lg md:text-3xl font-bold pt-4 pb-2 text-white">
				{listTitle}
			</h1>

			{(!movies || movies.length==0) && (
				<div
					className="movieList flex flex-shrink-0 gap-2 overflow-x-auto overflow-y-hidden"
					ref={scrollContainerRef}
				>
					<ShimmerLoader count={15} />

					<button
						onClick={handleScrollLeft}
						className="text-white scale-[2.5] absolute ml-[-1%]  top-[56%]"
					>
						<IoIosArrowDropleft />
					</button>
					<button
						onClick={handleScrollRight}
						className="text-white scale-[2.5] absolute top-[56%] right-[1.4%]"
					>
						<IoIosArrowDropright />
					</button>
				</div>
			)}

			{movies && movies.length>0 && (
				<div
					ref={scrollContainerRef}
					className="movieList md:h-[264px] h-[216px] flex flex-shrink-0 gap-2 overflow-x-auto overflow-y-hidden"
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
					<MovieCardShimmer />
					<div className="secondShimmer">
						<MovieCardShimmer />
					</div>
					<button
						onClick={handleScrollLeft}
						className="text-white scale-[2.5] absolute ml-[-1%]  top-[56%]"
					>
						<IoIosArrowDropleft />
					</button>
					<button
						onClick={handleScrollRight}
						className="text-white scale-[2.5] absolute top-[56%] right-[1.4%]"
					>
						<IoIosArrowDropright />
					</button>
				</div>
			)}
		</div>
	);
}

export default MovieList;
