import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {

  const mode = useSelector(selectMode);

  return (
    <div className={styles.header} id="header">
      <nav className={styles.navbar} >
        <div className={styles.navbar_left}>
          <a href="/" style={{color: mode ? "white":"#595d69"}}>
          <Image
            src="/images/title-icon.png"
            width="60px"
            height="55px"
            alt="siteicon"
            objectFit="contain"
          />
          <h1>FN</h1>
          </a>
        </div>
        <ul className={styles.menu} style={{color: mode ? "#a1a1a8":"#595d69"}}>
          <List icon={true} text="Home" href="/" />
          <List text="Blog"  arr={true} href="/blog"/>
          <List text="Internet"  arr={true} href="/internet"/>
          {/* <List text="Tech" href="/tech"/> */}
          <List text="Game"  arr={true} href="/game"/>
        </ul>
        <div className={styles.navbar_right}>
          <button>Subscribe!</button>
          <SearchIcon sx={{fontSize: 45, color: 'gray'}}/>
          <FormatAlignRightIcon sx={{fontSize: 45, color: 'gray'}}/>
        </div>
      </nav>
    </div>
  );
};

const List = ({icon,href,text,arr}) =>{
  return(
    <li>
      {icon && <FiberManualRecordIcon sx={{color: '#2163e8'}} fontSize="small" style={{position: 'absolute',left: "-15px",bottom: '22px',}}/>}
      <a href={href}>{text}</a>
      {arr && <KeyboardArrowDownIcon style={{position: 'absolute',right: "-15px",bottom: '20px',}}/>}
    </li>
  );
}

export default Header;
