import React from "react";
import Link from "next/link";
import styles from "../styles/TopHeader.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import DarkMode from "./DarkMode";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";
import AlternateSize from "./AlternateSize";

const TopHeader = () => {
  const mode = useSelector(selectMode);

  return (
    <div className={styles.top__header} id="top__header">
      <div
        id={styles.top_header__left}
        className={mode ? "lightText" : "darkText"}
      >
        <ul id={styles.top_header__ol}>
          <List listText="About" href="about" />
          <List listText="Forum" />
          <List listText="Login / Join" />
        </ul>
      </div>
      <div id={styles.top_header__right}>
        <AlternateSize/>
        <DarkMode />
        <div id={styles.social_media__handles}>
          <FacebookIcon
            sx={{ fontSize: 30, color: mode ? "#a1a1a8" : "#595d69" }}
          />
          <TwitterIcon
            sx={{ fontSize: 30, color: mode ? "#a1a1a8" : "#595d69" }}
            />
          <LinkedInIcon
            sx={{ fontSize: 30, color: mode ? "#a1a1a8" : "#595d69" }}
          />
          <YouTubeIcon
            sx={{ fontSize: 30, color: mode ? "#a1a1a8" : "#595d69" }}
          />
          <InstagramIcon
            sx={{ fontSize: 30, color: mode ? "#a1a1a8" : "#595d69" }}
          />
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

export default TopHeader;
