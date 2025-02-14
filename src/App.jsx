import { useEffect } from "react";
import { getPosts } from "./api/PostApi";

const App = () => {
  const getPostData = async () => {
    const res = await getPosts();
    console.log(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);
  return <div></div>;
};

export default App;
