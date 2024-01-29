import { IMG_CDN_URL } from "../utils/constants";

function MovieCard({posterPath}) {
	return (
		<div className="w-48 shrink-0">
			<img alt="Movie card" src={IMG_CDN_URL+posterPath} />
		</div>
	);
}

export default MovieCard;
