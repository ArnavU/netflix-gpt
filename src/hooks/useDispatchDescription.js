import { useDispatch, useSelector } from "react-redux";
import { addMovieDescription } from "../utils/moviesSlice";

function useDispatchDescription(description, movieId) {
    const dispatch = useDispatch();
    const storeMovieDescription = useSelector(store => store.movies.movieDescription[movieId])

    if(storeMovieDescription) return storeMovieDescription;

	const [
		id,
		title,
		original_language,
		overview,
		release_date,
		vote_average,
     ] = description;

	dispatch(
		addMovieDescription({
			id:id,
			description: {
				title:title,
				original_language:original_language,
				overview:overview,
				release_date:release_date,
				vote_average:vote_average,
			},
		})
	);

    return storeMovieDescription;
}

export default useDispatchDescription;
