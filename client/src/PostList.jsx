import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(Object.values(posts));
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(posts).map((post) => (
        <div
          key={post.id}
          className="card"
          style={{ width: "30%", marginBottom: "20px" }}
        >
          <div className="crad-body">
            <div className="card">
              <h3>{post.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
