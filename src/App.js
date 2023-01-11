import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
function App() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   onAuthStateChanged(auth,(user)=>{
  //     if(user){
  //       dispatch(setUser(user.email))
  //     }
  //   })
  // }, [auth,setUser])
  
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;