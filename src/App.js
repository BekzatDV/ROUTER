import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeBlog from "./Components/HomeBlog/HomeBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlog from "./Components/CreateBlog/CreateBlog";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contacts from "./Components/Contacts/Contacts";
import BlogList from "./Components/BlogList/BlogList";
import Footer from "./Components/Footer/Footer";
import FavoriteList from "./Components/Favorite/FavoriteList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HomeBlog />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/favorite" element={<FavoriteList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
