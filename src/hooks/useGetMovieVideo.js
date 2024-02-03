import { useDispatch, useSelector } from "react-redux";
import { addCardHoverVideos } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { add_id_vs_yt_key } from "../utils/clickedCardVideoKeySlice";

// fetch the video
const useGetMovieVideo = async (movieId) => {
    const dispatch = useDispatch();
	const ids = useSelector((store) => store.clickedCardVideoKey.id_vs_yt_key);

	const getMoviesData = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			API_OPTIONS
		);
		const jsonData = await data.json();

		// const filteredTrailer = jsonData.results.filter((video, index) => {
		// 	return video.type == "Trailer";
		// });

		const trailer = jsonData.length ? jsonData[0] : jsonData.results[0];
		const trailerKey = trailer?.key;

		dispatch(
			add_id_vs_yt_key({ movieId: movieId, trailerKey: trailerKey })
		);

	};

    useEffect(()=>{
        !ids[movieId] && getMoviesData();
    }, []);
};

export default useGetMovieVideo;
