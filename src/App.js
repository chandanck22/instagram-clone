import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Homepage from "./Homepage";
import Authentication from "./authentication/Authentication";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not Logged In ! ");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  console.log(auth.currentUser);

  return (
    <div className="app">

      {isLoading ? (
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authentication />}</>
      )}

      {/* {user ? <Homepage /> : <Authentication />} */}
    </div>
  );
}

export default App;
