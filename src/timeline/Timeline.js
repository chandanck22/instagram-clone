import React, { useState } from "react";
import "./Timeline.css";
import Sugesstions from "./Sugesstions";
import Post from "./posts/Post";

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      user: "chandanck22",
      postImage:
        "https://images.pexels.com/photos/18290299/pexels-photo-18290299/free-photo-of-a-woman-taking-a-photo-in-a-vineyard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 125,
      timespamp: "1d",
    },
    {
      user: "ram",
      postImage:
        "https://images.unsplash.com/photo-1583606784123-7c244f00d29c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 12,
      timespamp: "2d",
    },
    {
      user: "aman",
      postImage:
        "https://images.unsplash.com/photo-1699075057913-7bad2dd6e363?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 50,
      timespamp: "3d",
    },
    {
      user: "tanu",
      postImage:
        "https://images.unsplash.com/photo-1698778873586-4a2ea1a2e80f?q=80&w=1066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 120,
      timespamp: "4d",
    },
    {
      user: "sunny",
      postImage:
        "https://images.unsplash.com/photo-1696833355614-8e857dc761ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 52,
      timespamp: "5d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timespamp={post.timespamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
};
export default Timeline;
