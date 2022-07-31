import React from "react";
import Post from "./mock/posts/Post";
import "./mock/posts/post.scss";

const Posts = () => {
  return (
    <div className="post-container">
      <Post
        author={{
          name: "Brian Benson",
          photo:
            "https://images.pexels.com/photos/801885/pexels-photo-801885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          nickname: "@benson34",
        }}
        content="That was nice!"
        image='https://images.pexels.com/photos/2910774/pexels-photo-2910774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        date="26 лют."
      />

      <Post
        author={{
          name: "Bobby Marvel",
          photo:
            "https://images.pexels.com/photos/3956523/pexels-photo-3956523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          nickname: "@bobbymarvel",
        }}
        content="Have you been there?? You should..."
        image="https://images.pexels.com/photos/1080953/pexels-photo-1080953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        date="26 лют."
      />

      <Post
        author={{
          name: "Anakin skywalker",
          photo:
            "https://images.pexels.com/photos/7900592/pexels-photo-7900592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
        date="26 лют."
      />
    </div>
  );
};

export default Posts;
