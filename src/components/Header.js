import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg"></img>
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg"></img>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg"></img>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg"></img>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg"></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg"></img>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/favicon.svg"></UserImg>
    </Nav>
  );
}

export default Header;
const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled.img`
  width: 50px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-item: center;
  a {
    display: flex;
    aligh-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        left: 0;
        right: 0;
        bottom: -6px;
        position: absolute;
        opacity: 0;
        transform: scalex(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scalex(1);
      }
    }
  }
`;
const UserImg = styled.img`
  height: 48px;
  width: 48px;
  borde-radius: 50%;
  cursor: pointer;
`;
