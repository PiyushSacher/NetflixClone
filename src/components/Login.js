import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice'
import { BG_Image } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  //Validate the form data
  const FullNameRefVariable = useRef(null);
  const emailRefVariable = useRef(null);
  const passwordRefVariable = useRef(null);

  const HandleBtnClick = () => {
    //but how do we get this email and password
    console.log(emailRefVariable.current.value);
    console.log(passwordRefVariable.current.value);

    //now we have got the entered info of the user, now we will validate the data
    const message = checkValidData(
      emailRefVariable.current.value,
      passwordRefVariable.current.value
    );

    setErrMessage(message);
    console.log(message);

    //a string is coming
    if (message) return;

    //null is coming
    //sign in / sign up logic;
    if (!isSignInForm) {
      //sign-up form
      createUserWithEmailAndPassword(
        auth,
        emailRefVariable.current.value,
        passwordRefVariable.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: FullNameRefVariable.current.value,
          })
            .then(() => {
              const userObject = auth.currentUser;
              dispatch(
                addUser({
                  uid: userObject.uid,
                  email: userObject.email,
                  displayName: userObject.displayName,
                })
              );
              //profile updated
              console.log(user);
              // navigate("/browse");
            })
            .catch((error) => {
              //an error occured
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign-in logic
      signInWithEmailAndPassword(
        auth,
        emailRefVariable.current.value,
        passwordRefVariable.current.value
      )
        .then((userCredential) => {
          //signed in
          const user = userCredential.user;
          console.log(user);
          //navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover"
          src={BG_Image}
          alt="logo"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 bg-black w-full md:w-3/12  my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        {/* logic of h1 here according to the state variable */}
        <h1 className="font-bold text-4xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={FullNameRefVariable}
            type="text"
            placeholder="Full Name"
            className="bg-gray-700 p-4 my-2 w-full"
          ></input>
        )}
        <input
          // creating a reference
          ref={emailRefVariable}
          type="text"
          placeholder="Email or phone number"
          className=" bg-gray-700 p-4 my-4 w-full"
        ></input>

        <input
          // creating a reference
          ref={passwordRefVariable}
          type="password"
          placeholder="Password"
          className="bg-gray-700 p-4 my-2 w-full"
        ></input>

        <p className="text-red-500 font-bold text-lg py-2">{errMessage}</p>

        <button
          className="my-6 p-4 bg-red-700 w-full rounded-lg"
          onClick={HandleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>

        {/* we will convert the same form to signup form with some extra input parameters */}
        {/* Rememeber both forms are a single form and are shifting due to a state variable */}
      </form>
    </div>
  );
};

export default Login;
