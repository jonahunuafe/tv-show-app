import { createBrowserRouter, RouterProvider } from "react-router-dom";


import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage";
import ShowPage from "./pages/ShowPage";


const router = createBrowserRouter([
  { 
    path: "/", 
    element: <RootLayout />, 
    errorElement: <ErrorPage />, 
    children: [
      {index: true, element: <ShowPage />},
      {path: "details", element: <EpisodeDetailsPage />},
    ],
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
