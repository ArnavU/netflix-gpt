import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import HoverVideoPlay from "./HoverVideoPlay";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDescription, addNowClickedCard } from "../utils/moviesSlice";
import useDispatchDescription from "../hooks/useDispatchDescription";
import ClickVideoPlay from "./ClickVideoPlay";
import DescriptionCard from "./DescriptionCard";

function MovieCard({
	posterPath,
	movieId,
	setHoveredId,
	hoveredId,
	setClickedId,
	clickedId,
	description,
	setClickedCardDescription,
}) {
	const movieDescription = useDispatchDescription(description, movieId);
	
	const dispatch = useDispatch();

	if (!posterPath) return null;

	let timeOutId = null;
	let timeOutId2 = null;
	const mouseOverHandler = () => {
		clearTimeout(timeOutId2);
		timeOutId = setTimeout(() => {
			// setHoveredId(movieId);
		}, 2000);
	};

	const mouseLeaveHandler = () => {
		clearTimeout(timeOutId);
		clearTimeout(timeOutId2);

		timeOutId2 = setTimeout(() => {
			// setHoveredId(null);
		}, 300);
	};

	const clickHandler = () => {
		setClickedId(movieId);
	};

	window.addEventListener("click", (e) => {
		if (!e.target.closest(".parent-of-card-and-description")) {
			setClickedId(null);
		}
	});

	return (
		<div className={`parent-of-card-and-description`}>
			<div
				onMouseOver={mouseOverHandler}
				onMouseLeave={mouseLeaveHandler}
				onClick={clickHandler}
				className="cardParent w-36 md:w-44 shrink-0"
			>
				{movieId == hoveredId && clickedId != movieId && (
					<>
						<div className="hoverCard absolute left-[40%]">
							<HoverVideoPlay movieId={movieId} />
						</div>
					</>
				)}

				<div className="relative hover:cursor-pointer">
					<img alt="Movie card" src={IMG_CDN_URL + posterPath} />
					{movieId == hoveredId && (
						<div className="h-[100%] w-[100%] absolute bg-white/30 top-0 "></div>
					)}
				</div>

				{/* Description box having triggered on click  */}
			</div>
			{clickedId == movieId && (
				<div className="">
					<DescriptionCard
						movieId={movieId}
						movieDescription={movieDescription}
					/>
				</div>
			)}
		</div>
	);
}

export default MovieCard;
