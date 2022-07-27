import { useState, useEffect } from "react";
// import { Route } from "router";
import { createPost } from "../API";
// import {profile} from "./profile";

const NewPost = () => {
  const [newPost, setNewPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [willDeliver, setwillDeliver] = useState(true);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   createPost(title, description, price, willDeliver, location);
  //   console.log("This is the new post: ", createPost());
    // When someone types a messge into your form the handle submit function is going to grab the value of
  };

  // Trying to display the return of all newPosts with the new posts
  //
  return (
    <div className="newPost">
      <form>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
            console.log(title);
          }}
          placeholder="title"
        ></input>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
            console.log(description);
          }}
          placeholder="description"
        ></input>
        <input
          type="text"
          onChange={(event) => {
            setwillDeliver(event.target.value);
            console.log(willDeliver);
          }}
          placeholder="Will Deliver?"
        ></input>
        <input
          type="text"
          onChange={(event) => {
            setLocation(event.target.value);
            console.log(location);
          }}
          placeholder="Location "
        ></input>
        <input
          type="text"
          onChange={(event) => {
            setPrice(event.target.value);
            console.log(price);
          }}
          placeholder="Price"
        ></input>
        <button type="submit"onSubmit={(event)=>{
        createPost(price)
        console.log('This is the created post: ', )
      }}>Submit</button>
        <p>testing testing </p>
      </form>
    </div>
  );
};

export default NewPost;
