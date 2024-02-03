import { createSlice } from "@reduxjs/toolkit"
import { create } from "lodash";

const moviesSlice = createSlice({
    name: "movies", 
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideo: null,
        cardHoverVideos: {},
        movieDescription: {},
        nowClickedCard: {},
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        }, 
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        }, 
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload;
        }, 
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        }, 
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addCardHoverVideos: (state, action) => {
            const {movieId, trailerKey} = action.payload;
            state.cardHoverVideos[movieId] = trailerKey;
        }, 
        addMovieDescription: (state, action) => {
    /*  {
            id: {
                title: __, 
                original_language: __,
                overview: __,
                release_date: __,
                vote_average: __,
            }
        }
            */
           const {id, description} = action.payload;
           state.movieDescription[id] = description;
        }, 
        addNowClickedCard: (state, action) => {
            const {movieId, movieDescription} = action.payload;
            state.nowClickedCard = {movieId, movieDescription};
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addCardHoverVideos, addMovieDescription, addNowClickedCard } = moviesSlice.actions;

export default moviesSlice.reducer;