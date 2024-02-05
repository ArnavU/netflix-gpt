import React, { useEffect, useState } from "react";
import ClickVideoPlay from "./ClickVideoPlay";
import DescriptionCard from "./DescriptionCard";

const VideoTitle = ({ title, overview, movieId, description }) => {
	const [moreInfoClick, setMoreInfoClick] = useState(false);
	const handlePlay = () => {
		let mainTrailer = document.querySelector(".mainTrailer");
		mainTrailer.style.display = "block";
		mainTrailer.requestFullscreen();
	};

	const handleMoreInfo = () => {
		setMoreInfoClick(true);
	};

	document.addEventListener("fullscreenchange", () => {
		let isFullScreen = document.fullscreenElement;
		let fullScreenButton = document.querySelector(".fullScreenButton");
		let videoContainer = document.querySelector(".videoContainer");
		if (!isFullScreen) {
			let mainTrailer = document.querySelector(".mainTrailer");
			if(mainTrailer) {
				mainTrailer.style.display = "none";
			}

			if(fullScreenButton) { // for DescriptionCard Element
				fullScreenButton.textContent = "Watch on Full Screen";
				fullScreenButton.style.paddingRight = "8px";
				fullScreenButton.style.paddingLeft = "8px";
				fullScreenButton.style.marginRight = "12px"
				videoContainer.style.borderColor = "white";
			}
		}
	});

	window.addEventListener("click", (e) => {
		let ele = e.target;
		if (
			!(ele.closest(".mainMovieDescription") || ele.closest(".moreInfo"))
		) {
			setMoreInfoClick(false);
		}
	});

	useEffect(() => {
		let exitFullScreenButton = document.querySelector(".exitFullScreenButton");
		if (exitFullScreenButton) {
			exitFullScreenButton.addEventListener("click", () => {
				if (document.fullscreenElement && document.exitFullscreen) {
					document.exitFullscreen();
				}
			});
		}
	});

	return (
		<div className="absolute w-screen aspect-video pt-[9%] px-2 md:px-[20px] text-white bg-gradient-to-t from-black to-15%">
			<h1 className="text-2xl xl:text-6xl font-bold w-1/2 md:w-1/4">
				{title}
			</h1>
			<p className="hidden xl:block py-6 text-lg w-1/4 text-justify">
				{overview}
			</p>
			<div className="">
				<button
					className="bg-white text-black text-[10px] lg:p-4 p-2 mt-2 mr-2 mb-2 xl:px-12 lg:text-xl rounded-lg hover:bg-opacity-80 block md:inline-block"
					onClick={handlePlay}
				>
					▶ Play
				</button>
				<button
					className="moreInfo bg-gray-500 text-black text-[10px] p-2 lg:p-4 xl:px-12 lg:text-xl bg-opacity-70 rounded-lg hover:bg-opacity-90"
					onClick={handleMoreInfo}
				>
					More Info
				</button>
			</div>

			<div className="mainTrailer hidden relative rounded-[40px] border-2 border-black overflow-hidden">
				<ClickVideoPlay movieId={movieId} />
				<button className="exitFullScreenButton absolute z-[100] bottom-0 right-0 mr-4 mb-[4px] bg-red-800 text-[10px] text-white rounded-xl p-2 px-4">
					Exit Full Screen
				</button>
			</div>

			{moreInfoClick && (
				<div className="mainMovieDescription">
					<DescriptionCard
						movieId={movieId}
						description={description}
					/>
				</div>
			)}
		</div>
	);
};

export default VideoTitle;
