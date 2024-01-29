import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
	const dispatch = useDispatch();
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	const email = useRef();
	const password = useRef();
	const name = useRef();
	const confPassword = useRef();

	const handleButtonClick = () => {
		const message = checkValidData(
			email.current.value,
			password.current.value
		);
		setErrorMessage(message);

		if (message) return;

		if (!isSignInForm) {
			if (password.current.value !== confPassword.current.value) {
				setErrorMessage(
					"Enter correct password in 'Confirm Password' field"
				);
				return;
			}

			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
						photoURL:
							USER_AVATAR,
					})
						.then(() => {
							const { uid, email, displayName, photoURL } =
								auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errCode = error.code;
					const errMessage = error.message;
					console.log(errCode, errMessage);

					setErrorMessage(errCode + "-" + errMessage);
				});
		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode, errorMessage);
				});
		}
	};

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
		setErrorMessage("");
		email.current.value = "";
		password.current.value = "";
	};

	return (
		<div>
			<Header />
			<div>
				<img
					className="absolute"
					src={BG_URL}
					alt="background"
				/>
			</div>

			<form
				onClick={(e) => {
					e.preventDefault();
				}}
				className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80 z-20"
			>
				<h1 className="font-bold text-3xl py-4">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Full Name"
						className="p-4 my-4 w-full bg-gray-700 rounded-lg"
					/>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Email Address"
					className="p-4 my-4 w-full bg-gray-700 rounded-lg"
				/>
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-4 my-4 w-full bg-gray-700 rounded-lg"
				/>
				{!isSignInForm && (
					<input
						ref={confPassword}
						type="password"
						placeholder="Confirm Password"
						className="p-4 my-4 w-full bg-gray-700 rounded-lg"
					/>
				)}
				<p className="text-red-500 font-bold text-lg py-2">
					{errorMessage}
				</p>
				<button
					className="p-4 my-6 bg-red-700 w-full rounded-lg"
					onClick={handleButtonClick}
				>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
					{isSignInForm
						? "New to Netflix? Sign Up Now"
						: "Already Registered Sign In Now..."}
				</p>
			</form>
			<div className="h-full bg-black opacity-[0.5] w-full absolute top-0 z-10"></div>
		</div>
	);
};

export default Login;
