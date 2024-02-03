import { createSlice } from "@reduxjs/toolkit";

const clickedCardVideoKeySlice = createSlice({
	name: "clickedCardVideoKey",
	initialState: {
		id_vs_yt_key: {},
	},
	reducers: {
		add_id_vs_yt_key: (state, action) => {
			const { movieId, trailerKey } = action.payload;
			state.id_vs_yt_key[movieId] = trailerKey;
		},
	},
});

export const { add_id_vs_yt_key } = clickedCardVideoKeySlice.actions;
export default clickedCardVideoKeySlice.reducer;
