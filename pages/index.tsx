import { Inter } from "next/font/google";
import type { NextPage } from "next";
import { selectAuthState, setAuthState } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button>
    </div>
  );
};
export default Home;
