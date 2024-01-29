import { useSelector } from "react-redux";
import LANG from "../utils/languageConstants";

const GptSearchBar = () => {

	const langKey = useSelector(store => store.config.lang);

	return (
		<div className="pt-[10%] flex justify-center">
			<form action="" className="bg-black w-1/2 grid grid-cols-12">
				<input
					type="text"
					className="p-4 m-4 col-span-9 rounded-md"
					placeholder={LANG[langKey]?.gptSearchPlaceHolder}
				/>
				<button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
					{LANG[langKey]?.search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
