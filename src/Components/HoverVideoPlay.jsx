import { useEffect, useState } from "react";
import useGetMovieVideo from "../hooks/useGetMovieVideo";
import { useSelector } from "react-redux";


function HoverVideoPlay({ movieId }) {
	// const [trailerKey, setTrailerKey] = useState(null);

	useGetMovieVideo(movieId);

	const ids = useSelector(store => store.movies.cardHoverVideos);
	console.log("ids.movieID: ", ids[movieId]);

	return (
		<div className="">
			<div className="h-full w-full transition-all relative">
				<iframe
					className="scale-[4] hover:scale[4] relative z-50 border-4 rounded-xl"
					src={`https://www.youtube.com/embed/${ids[movieId]}?si=Tf5p1suo6eYZE9-8&autoplay=1&mute=1&loop=1`}
					// title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					frameBorder="0"
				></iframe>
				<div className="h-full w-full bg-white/0 absolute top-0 left-0 scale-[4] z-50"></div>
			</div>
		</div>
	);
}
export default HoverVideoPlay;
