import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <>
      <PostCreate />
      <hr />
      <PostList />
    </>
  );
};

export default App;
