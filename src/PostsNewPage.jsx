import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NewPost } from "./NewPost";

export function NewPostPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    axios.post("/posts.json", params).then((response) => {
      console.log(response.data);
      navigate("/posts");
    });
  };

  return (
    <div>
      <NewPost onCreate={handleCreate} />
    </div>
  );
}
