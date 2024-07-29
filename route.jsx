import { createBrowserRouter } from "react-router-dom";
import { Home } from "./src/components/pages/Home/Home";
import { Login } from "./src/components/pages/Login/Login";
import { Signup } from "./src/components/pages/signup/Signup";




export const route = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,

    },
    {
        path:"/login",
        element:<Login/>,

    },
    {
        path:"/signup",
        element:<Signup/>,

    },

])