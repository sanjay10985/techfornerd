import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import { BsThreeDots } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import DarkMode from "./DarkMode";
import AlternateSize from "./AlternateSize";
import Link from "next/link";

const Header = () => {
  const mode = useSelector(selectMode);

  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  }, []);

  const listenScroll = () => {
    const header = document.getElementById("header");

    if (document.documentElement.scrollTop > 800 && router.pathname === "/") {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  };

  function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.classList.toggle("active");
    } else {
      menu.classList.toggle("active");
    }
  }

  return (
    <div
      className={styles.header}
      id="header"
      style={{
        position: router.pathname === "/" ? "" : "sticky",
        top: "0",
      }}
    >
      <nav
        className={styles.navbar}
        style={{ backgroundColor: mode ? "#191a1f" : "white" }}
        id="mainNavbar"
      >
        <div className={styles.navbar_left}>
          <Link href="/">
            <a style={{ color: mode ? "white" : "#595d69" }}>
              <Image
                src="/images/title-icon.png"
                width="60px"
                height="55px"
                alt="siteicon"
                objectFit="contain"
              />
              <h1>ode</h1>
            </a>
          </Link>
        </div>
        <ul
          className={styles.menu}
          id="menu"
          style={{ color: mode ? "#a1a1a8" : "#383a40" }}
        >
          <List text="Home" href="/" />
          <List text="Blog" href="/blog" />
          <List text="Internet" href="/internet" />
          <List text="Game" href="/game" />
        </ul>
        <div className={styles.navbarRight}>
          {router.pathname === "/" ? (
            <>
              {" "}
              <div
                className={styles.smMenu}
                id="smMenuDiv"
                onClick={() => toggleMenu()}
                style={{color: mode ? 'rgb(242, 239, 230)': 'black'}}
              > 
                <label htmlFor="menu">Menu</label>
                <AiOutlineMenu id="smMenu" fontSize="3.5em" />
              </div>
              <form action="https://www.youtube.com/channel/UCKXMaI7IRw0bAdTv4Mo2yDA" target="__blank">
              <button type="submit" id="subButton">Subscribe!</button>
              </form>
              <BsSearch id="searchIcon" fontSize="3em" />
              <CgMenuRight fontSize="5em" />{" "}
            </>
          ) : (
            <>
              <div
                className={styles.smMenu}
                id="smMenuDiv"
                onClick={() => toggleMenu()}
              >
                <label htmlFor="menu">Menu</label>
                <AiOutlineMenu id="smMenu" fontSize="3.5em" />
              </div>
              <DarkMode />
              {/* <BsThreeDots fontSize="3em" color="gray" /> */}
              <AlternateSize />
              <BsSearch id="searchIcon" fontSize="3em" />
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

const List = ({ href, text, arr }) => {
  return (
    <li>
      {/* {icon && <FiberManualRecordIcon sx={{color: '#2163e8'}} fontSize="small" style={{position: 'absolute',left: "-15px",bottom: '22px',}}/>} */}
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  );
};

export default Header;
