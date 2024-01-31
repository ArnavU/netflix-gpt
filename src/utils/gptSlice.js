import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		showGptSearch: false,
		movieNames: null,
		movieResults: null,
	},
	reducers: {
		toggleGptSearchView: (state) => {
			state.showGptSearch = !state.showGptSearch;
		},
		addGptMovieResult: (state, action) => {
			const { movieNames, movieResults } = action.payload;
			state.movieNames = movieNames;
			state.movieResults = movieResults;
		},
	},
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;

// 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
// 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
