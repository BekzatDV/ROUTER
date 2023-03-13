import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img
          src="https://img.freepik.com/free-icon/important-person_318-10744.jpg"
          alt="Error"
        />
      </div>
      <div className="footer__reight-side">
        {" "}
        <div className="footer__links" id="footer-id">
          <h3 className="link_title">About us</h3>
          <a className="links" href="">
            Me
          </a>
          <a className="links" href="">
            My friend
          </a>
          <a className="links" href="">
            My dog
          </a>
        </div>
        <div className="footer__links">
          <h3 className="link_title">Address</h3>
          <a className="links" href="">
            My home
          </a>
          <a className="links" href="">
            My friend's house
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
