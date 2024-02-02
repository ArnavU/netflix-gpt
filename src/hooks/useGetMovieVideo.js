import { useDispatch, useSelector } from "react-redux";
import { addCardHoverVideos } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

// fetch the video
const useGetMovieVideo = async (movieId) => {
    const dispatch = useDispatch();
	const ids = useSelector((store) => store.movies.cardHoverVideos);

	const getMoviesData = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			API_OPTIONS
		);
		const jsonData = await data.json();

		const filteredTrailer = jsonData.results.filter((video, index) => {
			return video.type == "Trailer";
		});

		const trailer = jsonData.length ? jsonData[0] : jsonData.results[0];
		const trailerKey = trailer?.key;

		console.log("movieId, trailerKey", movieId, trailerKey);

		dispatch(
			addCardHoverVideos({ movieId: movieId, trailerKey: trailerKey })
		);

	};

    useEffect(()=>{
        !ids[movieId] && getMoviesData();
    }, []);
};

export default useGetMovieVideo;
