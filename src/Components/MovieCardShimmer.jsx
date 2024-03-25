import React from "react";
import {
	BarLoader,
	BeatLoader,
	BounceLoader,
	CircleLoader,
	ClipLoader,
	HashLoader,
	MoonLoader,
	RingLoader,
	SkewLoader,
} from "react-spinners";

const MovieCardShimmer = () => {
	return (
		<div className="relative bg-blue-400 cardParent w-36 md:h-[264px] h-[216px] md:w-44 shrink-0 overflow-hidden rounded-xl flex justify-center">
			{/* <div className="h-[264px] bg-red-600">Image Shimmer</div> */}
			<div className="absolute h-full w-full  bg-zinc-600 blur-md"></div>

			<MoonLoader
				color={"aqua"}
				// loading={loading}
				// cssOverride={override}
				className="m-auto"
				size={40}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default MovieCardShimmer;
