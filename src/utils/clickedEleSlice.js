import { createSlice } from "@reduxjs/toolkit";

const clickedEleSlice = createSlice({
    name: "clickedEle",
    initialState: {
        clickedEle: null,
    },
    reducers: {
        addClickedEle2: (state, action) => {
            state.clickedEle = action.payload;
        }
    }
})

export const {addClickedEle2} = clickedEleSlice.actions;
export default clickedEleSlice.reducer;