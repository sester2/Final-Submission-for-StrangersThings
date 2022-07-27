import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API";
// import NewPost from "./newposts.js";

const Posts = (props) => {
  // const [originalposts, setoriginalposts] = useState([" "]);
  console.log("These are my props:", props);
  const { originalposts, setoriginalposts } = props;

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      setoriginalposts(result);
      console.log("These are the posts from API:", result);
    };
    getPosts();
  }, []);

  // setoriginalposts would be invoked with [... originalposts, newPosts]
  // Wouldn't it make sense that the NewPost contain all the new posts? 
  return (
    <div>
      <Posts
        setoriginalposts={setoriginalposts}
        originalposts={originalposts}
      />
      <div>
        {originalposts.map((posts) => {
          return (
            <div>
              <div className="post-container" key={`all Post:${posts._id}`}>
                <h1>{posts.title}</h1>
                <h2>{posts.author.username}</h2>
                <h3>{posts.description}</h3>
                <h3>{posts.price}</h3>
                <h3>{posts.location}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// Somewhere we could have the newPosts appear at the bottom of the page
export default Posts;
