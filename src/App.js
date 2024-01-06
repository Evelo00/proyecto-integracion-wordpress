import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import WordPressPostList from "./components/WordPressPostList";

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Mi Aplicación</Typography>
            <div style={{ marginLeft: "auto" }}>
              <Button color="inherit" component={Link} to="/">
                JSONplacerholder
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
