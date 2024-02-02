import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import HoverVideoPlay from "./HoverVideoPlay";

function MovieCard({
	posterPath,
	movieId,
	setHoveredId,
	hoveredId,
	setClickedId,
	clickedId,
}) {
	if (!posterPath) return null;

	let timeOutId = null;
	const mouseOverHandler = () => {
		timeOutId = setTimeout(() => {
			console.log("Timeout started");
			setHoveredId(movieId);
		}, 1000);
	};

	const mouseLeaveHandler = () => {
		clearTimeout(timeOutId);
		setHoveredId(null);
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
		<div className="parent-of-card-and-description">
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
				<div className="my-description">
					<div className="absolute h-[40vh] w-[30vw] bg-zinc-800 top-[10%] z-[100]">
						<p>Hi this is Description</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default MovieCard;
