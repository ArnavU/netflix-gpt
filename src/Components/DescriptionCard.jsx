import ClickVideoPlay from "./ClickVideoPlay";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { MdFullscreen } from "react-icons/md";

function DescriptionCard({ movieId, description }) {
	const [id, title, original_language, overview, release_date, vote_average] =
		description;
	const controls = useAnimation();

	useEffect(() => {
		let fullScreenButton = document.querySelector(".fullScreenButton");
		let videoContainer = document.querySelector(".videoContainer");
		if (fullScreenButton) {
			fullScreenButton.addEventListener("click", () => {
				if (
					videoContainer.requestFullscreen &&
					!document.fullscreenElement
				) {
					videoContainer.requestFullscreen();
					fullScreenButton.textContent = "Exit Full Screen";
					fullScreenButton.style.marginRight = "16px"
					fullScreenButton.style.paddingRight = "16px";
					fullScreenButton.style.paddingLeft = "16px";
					videoContainer.style.borderColor = "black";
				} else {
					if (document.exitFullscreen) {
						document.exitFullscreen();
						fullScreenButton.textContent = "Watch on Full Screen";
					}
				}
			});
		}
	});

	return (
		<motion.div
			drag
			initial={{ x: "-50%", y: "-50%" }}
			dragElastic={0}
			onDragEnd={() => {
				controls.stop();
			}}
			animate={controls}
			className="descriptionCard fixed flex flex-col w-[70vw] md:w-[40vw] lg:max-w-[40vw]  bg-zinc-800 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] rounded-[8%] md:rounded-[4%] border-[4px] border-zinc-800"
		>
			{/* hover:scale-[2.5] hover:fixed left-0 hover:top-[50%] hover:translate-y-[-50%] hover:mt-0 hover:border-black */}
			{/* video container */}
			<div>
				<div className="videoContainer relative text-center h-[15vh] md:min-h-[40vh] w-[90%] border-2 rounded-xl overflow-hidden mt-4 md:mt-6 mx-auto flex items-center justify-center transition-all ">
					<ClickVideoPlay movieId={movieId} />
					<button className="fullScreenButton absolute z-[100] bottom-0 right-0 mb-[4px] bg-red-800 text-[10px] text-white rounded-xl p-2 mr-3">
						Watch on Full Screen
					</button>
				</div>
			</div>

			{/* Description */}
			<div className="mb-4 mt-2 w-[90%] mx-auto bg-zinc-800 rounded-xl">
				<h1 className="md:text-[40px] text-red-800 font-bold whitespace-nowrap overflow-auto">
					{title} <span>({original_language})</span>
				</h1>
				<p className="md:text-[22px] text-white">
					Release date: {release_date}
				</p>
				<p className="md:text-[22px] text-yellow-600 pb-[8px]">
					Rating: {vote_average}
				</p>
				<p className="md:text-[22px] text-white max-h-[100px] md:max-h-[140px] overflow-y-auto bg-zinc-900 p-2 rounded-xl">
					{overview}
				</p>
			</div>
		</motion.div>
	);
}

export default DescriptionCard;
