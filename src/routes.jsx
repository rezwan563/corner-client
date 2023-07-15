import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage/Homepage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage/>,
        errorElemnet: <ErrorPage/>,
        
    },
    {
        path: '/profile/:profile_id',
        element: <ProfilePage/>
    },
   
])

export default router;