import { useEffect, useState } from "react";
import { getPosts } from "../api/PostApi";

const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPosts();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((post) => (
        <div key={post.id} className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">
            {post.id}. Title: {post.title}
          </h2>
          <p className="text-gray-700 mb-4">Body: {post.body}</p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Edit
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
