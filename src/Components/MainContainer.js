import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);
	// const trailerKey = useSelector((store) => store.movies?.trailerVideo?.key);
	// const trailerKey = null;

	const mainMovie = movies?.[0];

	const original_title = mainMovie?.original_title;
	const overview = mainMovie?.overview;
	const id = mainMovie?.id;
	const title = mainMovie?.title;
	const original_language = mainMovie?.original_language;
	const release_date = mainMovie?.release_date;
	const vote_average = mainMovie?.vote_average;

	console.log("Main Container id: ", id)


	// const {original_title, overview, id } = mainMovie || {};
	// const {title, original_language, release_date, vote_average} = mainMovie || {};

	return (
		<div className="pt-[32%] sm:pt-[20%] md:pt-0 bg-black min-h-[120vh]">
			{/* {!trailerKey && <VideoBgShimmer />} */}
			<VideoBackground movieId={id}/>                     
			<VideoTitle title={original_title} overview={overview} movieId={id} description={[id, title, original_language, overview, release_date, vote_average]}/>
		</div>
	);
};

export default MainContainer;
