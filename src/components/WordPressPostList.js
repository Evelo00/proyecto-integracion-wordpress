import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";

const WordPressPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost/wordpress/wp-json/wp/v2/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching WordPress posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Typography
        variant="h4"
        style={{ marginTop: "5px", textAlign: "center", color: "white" }}
        gutterBottom
      >
        WordPress Post List
      </Typography>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title.rendered}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordPressPostList;
