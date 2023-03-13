import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Link to="/create-blog">
          <Navbar.Brand>Create Blog</Navbar.Brand>
        </Link>
        <Link to="/about-us">
          <Navbar.Brand>About Us</Navbar.Brand>
        </Link>
        <Link to="/contacts">
          <Navbar.Brand>Contacts</Navbar.Brand>
        </Link>
        <Link to="/favorite">
          <Navbar.Brand>Favorite</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default HomeBlog;
