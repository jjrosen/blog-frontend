import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostPage } from "./PostPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <PostPage /> },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
