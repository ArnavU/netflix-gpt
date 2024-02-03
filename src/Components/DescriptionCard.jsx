import ClickVideoPlay from "./ClickVideoPlay";

function DescriptionCard({movieId, description}) {
	const [id, title, original_language, overview, release_date, vote_average] = description;
	return (
		
			<div className="absolute flex flex-col min-h-[80vh] w-[40vw] bg-zinc-800 left-[50vw] top-[-50%] translate-x-[-50%]  z-[100] rounded-[8%] border-[8px] border-red-400">
				{/* <HoverVideoPlay movieId={movieId} /> */}

				{/* video container */}
				<div className="text-center h-[40vh] w-[90%] mt-4 mx-auto flex items-center justify-center">
					<ClickVideoPlay movieId={movieId} />
				</div>

				{/* Description */}
				<div className="mx-4 mt-4 mb-4">
					<h1 className="text-[40px] text-red-800 font-bold">
						{title}{" "}
						<span>({original_language})</span>
					</h1>
					<p className="text-[22px] text-white">
						Release date: {release_date}
					</p>
					<p className="text-[22px] text-yellow-600 pb-[8px]">
						Rating: {vote_average}
					</p>
					<p className="text-[22px] text-white">
						{overview}
					</p>
				</div>
			</div>
	);
}

export default DescriptionCard;
