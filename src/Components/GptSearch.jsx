import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
		<div className="fixed -z-10">
			<img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />
		</div>
			<div className="min-h-screen">
				<div className="md:pt-[0] pt-[25%]">
					<GptSearchBar setIsLoading={setIsLoading} />
				</div>
				{/* {isLoading && <GptShimmer />} */}
				<GptMovieSuggestions isLoading={isLoading}/>
			</div>
		</>
	);
};

export default GptSearch;
