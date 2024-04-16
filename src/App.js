import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import EpisodeDetails from "./components/EpisodeDetails";
import ShowDetails, { movieLoader } from "./components/ShowDetails";


const router = createBrowserRouter([
  { 
    path: "/", 
    element: <RootLayout />, 
    errorElement: <ErrorPage />, 
    children: [
      {index: true, element: <EpisodeDetails />},
    ],
  },
  {path: "details/:id", element: <ShowDetails />, loader: movieLoader },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
