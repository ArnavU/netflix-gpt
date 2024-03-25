import React from "react";
import { BarLoader, BeatLoader, BounceLoader, CircleLoader, ClipLoader, HashLoader, MoonLoader, RingLoader, SkewLoader } from "react-spinners";

function VideoBgShimmer() {
	return (
		<div className="absolute left-0 top-0 rounded-[35px] h-[100%] w-[100%] z-100">
      <div className="absolute h-full w-full bg-zinc-500 opacity-[30%]  rounded-[35px]">
      </div>
			<div className="margin-auto h-full flex justify-center">
				<MoonLoader
					color={"blue"}
					// loading={loading}
					// cssOverride={override}
					className="m-auto"
					size={70}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		</div>
	);
}

export default VideoBgShimmer;
