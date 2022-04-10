import React from "react";
import { getAuth } from "firebase/auth";
import app from "../../Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <form className="mt-4">
        <input
          className="px-3 py-2 m-2"
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email"
        />
        <br />
        <input
          className="px-3 py-2 m-2"
          type="password"
          placeholder="Your password"
          name=""
          id=""
        />
        <br />
        <input className="btn btn-primary" type="button" value="Login" />
        <br />
        <input
          onClick={() => handleGoogleSignIn()}
          className="btn mt-2 btn-info"
          type="button"
          value="SignIn With Google"
        />
      </form>
    </div>
  );
};

export default Login;
