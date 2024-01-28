import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logogray.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [hambMenu, setHambMenu] = useState(false);
  const cartLength = useSelector((state) => state.cart.totalQty);
  const wishListLength = useSelector(
    (state) => state.wishList.wishListAll.length
  );
  return (
    <div className="headerHolder">
      <div className="headerBig">
        <div className="headerLogo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div
          className="bars"
          onClick={() => {
            setHambMenu(true);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="searchInputHolder">
          <Link to="searchPage">
            <div className="searchInput">
              <p>Search comics</p>
              <div className="magnifierDelete">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </Link>
        </div>
        <div className="userCorner">
          <div className="log">
            <Link to="#" onClick={() => alert("Work in progress...")}>
              <i className="fa-regular fa-user"></i>
            </Link>
          </div>
          <div className="wish">
            <Link to="wishList">
              <i className="fa-regular fa-heart"></i>
            </Link>
            <span className="cartAndWishQty">{wishListLength}</span>
          </div>
          <div className="bag">
            <Link to="shoppingCart">
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
            <span className="cartAndWishQty">{cartLength}</span>
          </div>
        </div>
      </div>
      <div className="logo-visible-phone">
        <div className="visible-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="headerSmall">
        <div className="headerSmallHolder">
          <div className="ulDiv">
            <nav>
              <ul>
                <li>
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="news">NEWS</NavLink>
                </li>
                <li>
                  <NavLink to="shop">SHOP</NavLink>
                </li>
                <li>
                  <NavLink to="contact">CONTACT</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="emailAddress">
            <i className="fa-regular fa-envelope"></i>
            <p>graylog.comics@bmail.com</p>
          </div>
        </div>
      </div>
      <div
        className={
          hambMenu === true ? "hamburgerMenuShow" : "hamburgerMenuShowOff"
        }
      >
        <div className="mobileMenuCloseButtonHolder">
          <div className="mobileCloseButton">
            <i
              className="fa-regular fa-rectangle-xmark"
              onClick={() => {
                setHambMenu(false);
              }}
            ></i>
          </div>
        </div>

        <div className="mobileLinks">
          <div className="mobileLinksHolder">
            <Link
              to="/"
              onClick={() => {
                setHambMenu(false);
              }}
            >
              <div className="mobileLinksHolder">HOME</div>
            </Link>
            <Link
              to="news"
              onClick={() => {
                setHambMenu(false);
              }}
            >
              <div className="mobileLinksHolder">NEWS</div>
            </Link>
            <Link
              to="shop"
              onClick={() => {
                setHambMenu(false);
              }}
            >
              <div className="mobileLinksHolder">SHOP</div>
            </Link>
            <Link
              to="contact"
              onClick={() => {
                setHambMenu(false);
              }}
            >
              <div className="mobileLinksHolder">CONTACT</div>
            </Link>
            <Link
              to="/"
              onClick={() => {
                setHambMenu(false);
              }}
            >
              <div className="mobileLinksHolder">PROFILE</div>
            </Link>
            <Link
              to="wishList"
              onClick={() => {
                setHambMenu(false);
              }}
            >
              <div className="mobileLinksHolder">WISH LIST</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
