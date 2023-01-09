import { RouterProvider } from "react-router-dom";
import auth from "./firebase/firebase.config";
import routes from "./routes/routes";

function App() {
  console.log(auth);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;