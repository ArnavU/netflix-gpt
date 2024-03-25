import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


function useUpcomingMovies() {
	const dispatch = useDispatch();
	const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

	const getUpcomingMovies = async () => {
		const data = await fetch(
			`${process.env.REACT_APP_TMDB_PROXY_URL}/3/movie/upcoming?language=en-US&page=1`,
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addUpcomingMovies(json.results));
	};

	useEffect(() => {
		!upcomingMovies && getUpcomingMovies();
	}, []);
}

export default useUpcomingMovies;
