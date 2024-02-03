import { IMG_CDN_URL } from "../utils/constants";
import HoverVideoPlay from "./HoverVideoPlay";
import { useDispatch, useSelector } from "react-redux";
import { addClickedEle } from "../utils/moviesSlice";
import DescriptionCard from "./DescriptionCard";
import { addClickedEle2 } from "../utils/clickedEleSlice";

function MovieCard({
	posterPath,
	movieId,
	setHoveredId,
	hoveredId,
	setClickedId,
	clickedId,
	description,
	listTitle,
}) {
	const clickedEle = useSelector(store => store.clickedEle.clickedEle);

	const dispatch = useDispatch();
	let style = listTitle+movieId;
	let classStyle = listTitle+movieId;	
	
	if (!posterPath) return null;
	
	let timeOutId = null;
	let timeOutId2 = null;
	const mouseOverHandler = () => {
		clearTimeout(timeOutId2);
		timeOutId = setTimeout(() => {
			// setHoveredId(movieId);
		}, 2000);
	};

	const mouseLeaveHandler = () => {
		clearTimeout(timeOutId);
		clearTimeout(timeOutId2);
		
		timeOutId2 = setTimeout(() => {
			// setHoveredId(null);
		}, 300);
	};

	const clickHandler = () => {
		console.log("1");
		setClickedId(movieId);
		console.log("2");
		// dispatch(addClickedEle(classStyle));
		dispatch(addClickedEle2(classStyle));
	};
	
	return (
		<div className={`parent-of-card-and-description ${style}`}>
			<div
				// onMouseOver={mouseOverHandler}
				// onMouseLeave={mouseLeaveHandler}
				onClick={clickHandler}
				className="cardParent w-36 md:w-44 shrink-0"
			>
				{/* {movieId == hoveredId && clickedId != movieId && (
					<>
						<div className="hoverCard absolute left-[40%]">
							<HoverVideoPlay movieId={movieId} />
						</div>
					</>
				)} */}

				<div className="relative hover:cursor-pointer">
					<img alt="Movie card" src={IMG_CDN_URL + posterPath} />
					{movieId == hoveredId && (
						<div className="h-[100%] w-[100%] absolute bg-white/30 top-0 "></div>
					)}
				</div>

				{/* Description box having triggered on click */}
			</div> 

			{clickedId == movieId && clickedEle==classStyle && (
				<div>
				{console.log("Child Rendered")}
					<DescriptionCard
						movieId={movieId}
						description={description}
					/>
				</div>
			)}
		</div>
	);
}

export default MovieCard;
