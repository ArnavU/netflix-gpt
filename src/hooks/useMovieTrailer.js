import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch();

	// fetch the video
	const getMovieVideo = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			API_OPTIONS
		);
		const jsonData = await data.json();

		const filteredTrailer = jsonData.results.filter((video, index) => {
			return video.type == "Trailer";
		});

		const trailer = filteredTrailer.length
			? filteredTrailer[0]
			: jsonData.results[0];

		dispatch(addTrailerVideo(trailer));
	};

	useEffect(() => {
		getMovieVideo();
	}, []);
};

export default useMovieTrailer;
