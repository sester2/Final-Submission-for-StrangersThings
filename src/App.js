import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchPosts } from "./api";
import nav from "./COMPONENTS/nav";
import posts from "./COMPONENTS/posts";
// import Profile from "./components/Profile";
// import login from "./components/login";
import signin from "./COMPONENTS/signin";


function App() {
  const [token, setToken] = useState(null);

  const [originalposts, setoriginalposts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      setoriginalposts(result);
      console.log("These are the posts from API:", result);
    };
    getPosts();
  }, []);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setToken(localStorageToken);
    }
    console.log("INSIDE OUR USE EFFECT the toke is currently:", token);
  }, [token]);

  return (
    <div>
      <BrowserRouter>
        <nav/>
        <Routes>
          <Route
            path="/"
            element={
              <posts
                setoriginalposts={setoriginalposts}
                originalposts={originalposts}
              />
            }
          />
          <Route
            path="/posts"
            element={
              <posts
                setoriginalposts={setoriginalposts}
                originalposts={originalposts}
              />
            }
          />

          <Route path="/signin" element={<signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {token ? <Navigate to="/Profile" /> : <login />}
// {!token ? <Navigate to="login" /> : <Profile />}
