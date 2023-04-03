import React from "react";
import "./header.scss";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

const nav__link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Ecommerce</h1>
                {/* <p>Since 1997</p> */}
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav__link.map((item) => {
                  <li className="nav__item" key={item.path}>
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </li>;
                })}
                <li className="nav__item">
                  <NavLink to="home">Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="shop">Shop</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="cart">Cart</NavLink>
                </li>
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">2</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="userIcon"
                />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
