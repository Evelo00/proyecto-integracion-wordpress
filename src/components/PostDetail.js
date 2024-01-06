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
        <CircularProgress
          style={{ margin: "20px auto", display: "block", color: "white" }}
        />
      ) : (
        post && (
          <Card
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "600px",
              borderRadius: "25px",
              padding: "16px",
              background: "rgba(0,0,0,.1)",
              backdropFilter: "blur(80px)",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  textAlign: "center",
                  marginBottom: "16px",
                  color: "#D4D7E1",
                }}
              >
                {post.title}
              </Typography>
              <Typography
                variant="body1"
                fontSize={18}
                color="#D4D7E1"
                gutterBottom
              >
                {post.body}
              </Typography>
              <div
                style={{
                  height: "16px",
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Typography variant="caption" color="#D4D7E1">
                  Post ID: {post.id}
                </Typography>
                <Typography variant="caption" color="#D4D7E1">
                  User ID: {post.userId}
                </Typography>
              </div>
            </CardContent>
            <Button
              component={Link}
              to="/"
              size="large"
              variant="filled"
              style={{
                margin: "16px",
                alignItems: "center",
                display: "flex",
                padding: "8px 16px",
                borderRadius: "25px",
                backgroundColor: "#D4D7E1",
                fontWeight: "bold",
              }}
            >
              Back List
            </Button>
          </Card>
        )
      )}
    </Container>
  );
};

export default PostDetail;
