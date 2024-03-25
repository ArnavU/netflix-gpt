import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


function usePopularMovies() {
	const dispatch = useDispatch();
	const popularMovies = useSelector(store => store.movies.popularMovies);

	const getPopularMovies = async () => {
		const data = await fetch(
			`${process.env.REACT_APP_TMDB_PROXY_URL}/3/movie/popular?language=en-US&page=1`,
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addPopularMovies(json.results));
	};

	useEffect(() => {
		!popularMovies && getPopularMovies();
	}, []);
}

export default usePopularMovies;
