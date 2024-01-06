import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Card,
  CardContent,
  Container,
  CircularProgress,
  Button,
} from "@mui/material";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {loading ? (
        <CircularProgress style={{ margin: "20px auto", display: "block" }} />
      ) : (
        post && (
          <Card
            style={{ marginBottom: "16px", width: "100%", maxWidth: "600px" }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                {post.body}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Post ID: {post.id}
              </Typography>
            </CardContent>
            <Button
              component={Link}
              to="/"
              variant="outlined"
              color="primary"
              style={{
                margin: "16px",
                alignItems: "center",
                display: "flex",
                padding: "8px 16px",
              }}
            >
              Back
            </Button>
          </Card>
        )
      )}
    </Container>
  );
};

export default PostDetail;
