import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Pagination,
} from "@mui/material";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(() => {
    const storedPage = parseInt(localStorage.getItem("currentPage"), 10);
    return isNaN(storedPage) ? 1 : storedPage;
  });
  const postsPerPage = 8;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    localStorage.setItem("currentPage", page.toString());
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: "10px" }} gutterBottom>
        Posts
      </Typography>

      <Grid container spacing={3}>
        {paginatedPosts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card
              variant="outlined"
              style={{
                height: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Link
                  to={`/posts/${post.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="h6" component="div">
                    {post.title}
                  </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(posts.length / postsPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
        size="large"
        style={{ margin: "10px" }}
      />
    </Container>
  );
};

export default PostList;
