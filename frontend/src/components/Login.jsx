import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from "../../config/firebase.config";

const Login = ({ setAuth }) => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const userCred = await signInWithPopup(firebaseAuth, provider);
      if (userCred) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");
        firebaseAuth.onAuthStateChanged((user) => {
          if (user) {
            user.getIdToken().then((token) => {
              console.log(token);
            });
          } else {
            setAuth(false);
            window.localStorage.setItem("auth", "false");
            navigate("/login");
          }
        });
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
          <div
            onClick={signInWithGoogle}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md"
          >
            <FcGoogle />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
