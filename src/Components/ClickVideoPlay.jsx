import { useEffect, useState } from "react";
import useGetMovieVideo from "../hooks/useGetMovieVideo";
import { useSelector } from "react-redux";

function ClickVideoPlay({ movieId }) {
	// const [trailerKey, setTrailerKey] = useState(null);

	useGetMovieVideo(movieId);

	const ids = useSelector((store) => store.movies.cardHoverVideos);

	return (
		<div className="h-full w-full">
			<div className="h-full w-full transition-all relative">
				<iframe
					className="h-[100%] w-[100%] hover:scale[4] relative z-50 border-4 rounded-xl"
					src={`https://www.youtube.com/embed/${ids[movieId]}?si=Tf5p1suo6eYZE9-8&autoplay=1&mute=1&loop=1`}
					// title="YouTube video player"
					// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					frameBorder="0"
					aria-controls="off"
				></iframe>
			</div>
		</div>
	);
}
export default ClickVideoPlay;