import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import clickedEleSlice from "./clickedEleSlice";
import clickedCardVideoKeySlice from "./clickedCardVideoKeySlice";

const appStore = configureStore({
	reducer: {
		user: userReducer,
		movies: moviesReducer,
		gpt: gptReducer,
		config: configReducer,
		clickedEle: clickedEleSlice,
		clickedCardVideoKey: clickedCardVideoKeySlice,
	},
});

export default appStore; 
