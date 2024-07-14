import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../Firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
function Goauth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleAouth = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);

      const resp = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          photoUrl: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await resp.json();
      console.log("data", data);
      if (resp.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
        console.log("signin great");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      type="button"
      outline
      gradientDuoTone="pinkToOrange"
      onClick={handleGoogleAouth}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-1" />
      continue with Google
    </Button>
  );
}

export default Goauth;
