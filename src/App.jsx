import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostPage } from "./PostPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  const email = localStorage.getItem("email");
  return (
    <div>
      <Header />
      {!email && (
        <>
          <SignupPage />
          <LoginPage />
        </>
      )}

      <PostPage />
      <Footer />
    </div>
  );
}

export default App;
