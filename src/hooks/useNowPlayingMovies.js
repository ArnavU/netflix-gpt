import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

function useNowPlayingMovies() {
	const dispatch = useDispatch();
	const nowPlayingMovies = useSelector((store) => store.movies.nowPlaying);

	const getNowPlayingMovies = async () => {
		const data = await fetch(
			`${process.env.REACT_APP_TMDB_PROXY_URL}/3/movie/now_playing?language=en-US&page=1`,
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};

	useEffect(() => {
		!nowPlayingMovies && getNowPlayingMovies();
	}, []);
}

export default useNowPlayingMovies;
