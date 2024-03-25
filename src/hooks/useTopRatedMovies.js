import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


function useTopRatedMovies() {
	const dispatch = useDispatch();
	const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

	const getTopRatedMovies = async () => {
		const data = await fetch(
			`${process.env.REACT_APP_TMDB_PROXY_URL}/3/movie/top_rated?language=en-US&page=1`,
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addTopRatedMovies(json.results));
	};

	useEffect(() => {
		!topRatedMovies && getTopRatedMovies();
	}, []);
}

export default useTopRatedMovies;
