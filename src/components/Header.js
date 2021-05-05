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
  width: 80px;
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
    }
  }
`;
const UserImg = styled.img`
  height: 48px;
  width: 48px;
  borde-radius: 50%;
  cursor: pointer;
`;