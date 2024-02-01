import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="absolute w-screen aspect-video pt-[9%] px-2 md:px-[20px] text-white bg-gradient-to-t from-black to-15%">
			<h1 className="text-1xl md:text-6xl font-bold w-1/2 md:w-1/4">{title}</h1>
			<p className="hidden md:block py-6 text-lg w-1/4 text-justify">
				{overview}
			</p>
			<div className="">
				<button className="bg-white text-black md:p-4 p-2 mt-2 mb-2 md:px-12 md:text-xl rounded-lg hover:bg-opacity-80 block md:inline-block">
					▶ Play
				</button>
				<button className="bg-gray-500 text-black p-2 md:p-4 md:px-12 md:text-xl bg-opacity-70 rounded-lg hover:bg-opacity-90 hidden md:inline-block">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
