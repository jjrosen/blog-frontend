import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostPage } from "./PostPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />

      <PostPage />
      <Footer />
    </div>
  );
}

export default App;
