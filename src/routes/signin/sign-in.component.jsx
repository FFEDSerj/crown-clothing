import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  singInWithGooglePopup,
  singInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    fetchUser();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <button onClick={singInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
