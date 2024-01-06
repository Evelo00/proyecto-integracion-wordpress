import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import WordPressPostList from "./components/WordPressPostList";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <AppBar
          className="app-bar"
          position="static"
          style={{
            marginBottom: "16px",
            background: "rgba(0,0,0,.1)",
            backdropFilter: "blur(5px)",
            boxShadow: "none",
            border: "none",
          }}
        >
          <Toolbar>
            <Typography variant="h6">Prueba técnica</Typography>
            <div style={{ marginLeft: "auto" }}>
              <Button color="inherit" component={Link} to="/">
                JSONph
              </Button>
              <Button color="inherit" component={Link} to="/wordpress">
                WordPress
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        <Container>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/wordpress" element={<WordPressPostList />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
