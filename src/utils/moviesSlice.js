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
            console.log("HIIII", movieId, trailerKey);
            state.cardHoverVideos[movieId] = trailerKey;
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addCardHoverVideos} = moviesSlice.actions;

export default moviesSlice.reducer;