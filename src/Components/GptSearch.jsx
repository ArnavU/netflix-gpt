import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
	return (
		<>
		<div className="fixed -z-10">
			<img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />
		</div>
			<div className="min-h-screen">
				<div className="md:pt-[0] pt-[25%]">
					<GptSearchBar />
				</div>
				<GptMovieSuggestions />
			</div>
		</>
	);
};

export default GptSearch;
