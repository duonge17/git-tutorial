import { createBrowserRouter } from "react-router-dom";
import Home from "../features/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <h1></h1>,
        children: []
    }
])
