import { useDispatch, useSelector } from "react-redux"
import MovieList from "./MovieList";
import { addClickedEle } from "../utils/moviesSlice"; 
import { addClickedEle2 } from "../utils/clickedEleSlice";
import { useRef } from "react";

const SecondaryContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  window.addEventListener('click', (e)=>{
      if(!e.target.closest(".parent-of-card-and-description")) {
        dispatch(addClickedEle2(null));
      }
    })
    console.log("Secondary Container")

  return (
    <div className="bg-zinc-950">
      <div className="mt-[-10%] relative z-1">
        <MovieList listTitle={"Now Playing"} movies={movies.nowPlayingMovies}/> 
        <MovieList listTitle={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList listTitle={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList listTitle={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList listTitle={"Horror Movies"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer