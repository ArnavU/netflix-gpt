import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => unSubscribe();
	}, []);

	const handleGptSearchClick = () => {
		// toggle GPT Search
		dispatch(toggleGptSearchView());
	};

	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};

	return (
		// netflix logo
		<div className="absolute w-screen px-8 md:py-0 bg-gradient-to-b from-black z-40 flex md:justify-between align-middle flex-col md:flex-row">
			<img
				className="w-32	sm:w-44 md:w-44 mx-auto md:mx-0"
				src={LOGO_URL}
				alt="logo"
			/>

			{user && (
				// user image and signout button
				<div className="flex md:p-2 justify-center items-center">
					{showGptSearch && (
						<select
							className="p-2 bg-gray-900 text-white rounded-lg"
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANGUAGES.map((lang) => {
								return (
									<option
										key={lang.identifier}
										value={lang.identifier}
									>
										{lang.name}
									</option>
								);
							})}
						</select>
					)}
					<button
						className="p-1 md:py-2 md:px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg shrink-0"
						onClick={handleGptSearchClick}
					>
						{showGptSearch ? "Home Page" : "GPT Search"}
					</button>
					<img
						className="w-12 h-12 hidden sm:block md:block"
						alt="usericon"
						src={user.photoURL}
					/>
					<button
						onClick={handleSignOut}
						className="font-bold text-white"
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
