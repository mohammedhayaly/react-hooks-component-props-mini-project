import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const { name, image, about, posts } = blogData;

  return (
    <div className="App">
      <Header blogName={name} />
      <About image={image} aboutText={about} />
      <ArticleList articles={posts} />
    </div>
  );
}

export default App;