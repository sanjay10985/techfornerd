import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = ({ toggleMode, mode }) => {
  return (
    <div className="header">
      <div id={styles.top__header}>
        <div
          id={styles.top_header__left}
          className={mode === "dark" ? "lightText" : "darkText"}
        >
          <ul id={styles.top_header__ol}>
            <List listText="About" href="about" />
            <List listText="Forum" />
            <List listText="Login / Join" />
          </ul>
        </div>
        <div id={styles.top_header__right}>
          <div
            id={styles.togglediv}
            style={{ color: mode === "dark" ? "white" : "#2163e8" }}
          >
            {/* <input className={styles.input} type="radio" name="tx" id="sm_tx" onChange={decreaseFontSize} /> */}
            <input className={styles.input} type="radio" name="tx" id="sm_tx" />
            <label
              id={styles.label}
              className="lableback"
              htmlFor="sm_tx"
              onClick={(e) => (document.body.style.fontSize = "87%")}
            >
              A-
            </label>
            <input
              className={styles.input}
              type="radio"
              name="tx"
              id="default"
              defaultChecked
            />
            <label
              id={styles.label}
              className="lableback"
              htmlFor="default"
              onClick={(e) => (document.body.style.fontSize = "100%")}
            >
              A
            </label>
            <input className={styles.input} type="radio" name="tx" id="lg_tx" />
            <label
              id={styles.label}
              className="lableback"
              htmlFor="lg_tx"
              onClick={(e) => (document.body.style.fontSize = "113%")}
            >
              A+
            </label>
          </div>
          <div className={styles.toggle_theme_div}>
            {mode === "dark" ? (
              <DarkModeIcon
                className={styles.theme_change_button}
                sx={{ color: "pink", fontSize: 32 }}
                fontSize="large"
                onClick={toggleMode}
              />
            ) : (
              <Brightness7Icon
                className={styles.theme_change_button}
                sx={{ color: "orange", fontSize: 32 }}
                fontSize="large"
                onClick={toggleMode}
              />
            )}
            <span></span>
          </div>

          <div id={styles.social_media__handles}>
            <FacebookIcon
              sx={{ fontSize: 35 }}
              color={mode === "dark" ? "secondary" : "action"}
            />
            <TwitterIcon
              sx={{ fontSize: 35 }}
              color={mode === "dark" ? "secondary" : "action"}
            />
            <LinkedInIcon
              sx={{ fontSize: 35 }}
              color={mode === "dark" ? "secondary" : "action"}
            />
            <YouTubeIcon
              sx={{ fontSize: 35 }}
              color={mode === "dark" ? "secondary" : "action"}
            />
            <InstagramIcon
              sx={{ fontSize: 35 }}
              color={mode === "dark" ? "secondary" : "action"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const List = ({ listText, href }) => {
  return (
    <li className={styles.top_header__list}>
      {/* to convert the first letter of every list the logic is been used */}
      <Link href={`/${href}`}>{listText}</Link>
    </li>
  );
};

export default Header;
