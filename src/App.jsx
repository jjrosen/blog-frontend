import { Footer } from "./Footer";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { PostsIndexPage } from "./PostsIndexPage";
import { NewPostPage } from "./PostsNewPage";
import { PostShowPage } from "./PostShowPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://blog-backend-vx4y.onrender.com";

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
      { path: "/", element: <HomePage /> },
      {
        path: "/posts",
        element: <PostsIndexPage />,
      },
      {
        path: "/posts/new",
        element: <NewPostPage />,
      },
      {
        path: "/posts/:id",
        element: <PostShowPage />,
      },
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
