import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

function useNowPlayingMovies(pageNo=1, prevPageNo=null, setPrevPageNo=null) {
	const dispatch = useDispatch();
	const nowPlayingMovies = useSelector((store) => store.movies.nowPlaying);

	

	const getNowPlayingMovies = async () => {
		console.log("Page Number: ", pageNo)
		if(setPrevPageNo) {
			setPrevPageNo(prevPageNo => prevPageNo+1);
		}
		const data = await fetch(
			`${process.env.REACT_APP_TMDB_PROXY_URL}/3/movie/now_playing?language=en-US&page=${pageNo}`,
			API_OPTIONS
		);
		const json = await data.json();

		let movieList;
		if(!nowPlayingMovies) {
			movieList = json.results;
		}
		else {
			movieList = [...nowPlayingMovies, ...json.results];
		}

		console.log("nowPlayingMovies: ", nowPlayingMovies);
		console.log("json.results: ", json.results);
		console.log("movieList: ", movieList);



		dispatch(addNowPlayingMovies(movieList));
	};

	useEffect(() => {
		console.log(pageNo, prevPageNo)

		console.log("NowPlayingMovies in useEffect: ", nowPlayingMovies)
		console.log("Page No in useEffect: ", pageNo)
		if(prevPageNo) {
			if(pageNo != prevPageNo) {
				getNowPlayingMovies();
			}
		}

		if(nowPlayingMovies == null) {

			getNowPlayingMovies();
		}
	}, [pageNo]);
}

export default useNowPlayingMovies;
