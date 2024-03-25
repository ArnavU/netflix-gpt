import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import VideoBgShimmer from "./VideoBgShimmer";

const VideoBackground = ({ movieId }) => {
	useMovieTrailer(movieId);
	console.log("Main container movieId: ", movieId);
	useMovieTrailer(movieId);

	
	const trailerKey = useSelector((store) => store.movies?.trailerVideo?.key);
	// const trailerKey = null;
	
	console.log("Main container trailerKey: ", trailerKey)

	return (
		<div className="h-full w-screen static">
			{!trailerKey && <VideoBgShimmer />}
			{trailerKey && (
				<iframe
					className="w-screen aspect-video h-full"
					src={`https://www.youtube.com/embed/${trailerKey}?si=Tf5p1suo6eYZE9-8&autoplay=1&mute=1&loop=1`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			)}
		</div>
	);
};

export default VideoBackground;
