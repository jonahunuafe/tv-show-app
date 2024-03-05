import { createBrowserRouter, RouterProvider } from "react-router-dom";


import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <RootLayout />, 
    errorElement: <ErrorPage />
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
