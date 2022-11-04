import React, {useState} from "react";
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

  const [open, setOpen] = useState(false);

  function toggleMenu(){
  
    const menu = document.getElementById('menu')
    if(menu.style.display==='block')
    {
      // menu.style.display="none"
      menu.classList.toggle('active')
    }
    else{
      // menu.style.display="block"
      menu.classList.toggle('active')

    }
  }



  return (
    <div className={styles.header} id="header">
      <nav className={styles.navbar}>
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
          style={{ color: mode ? "#a1a1a8" : "#383a40"}}

        >
          <List text="Home" href="/" />
          <List text="Blog" arr={true} href="/blog" />
          <List text="Internet" arr={true} href="/internet" />
          <List text="Game" arr={true} href="/game" />
        </ul>
        <div className={styles.navbarRight}>
          {router.pathname === "/" ? (
            <>
              {" "}
              <div
                className={styles.smMenu}
                id="smMenuDiv"
                onClick={() => toggleMenu()}
              >
                <label htmlFor="menu">Menu</label>
                <AiOutlineMenu id="smMenu" fontSize="3.5em" />
              </div>
              <button id="subButton">Subscribe!</button>
              <BsSearch id="searchIcon" fontSize="3em" />
              <CgMenuRight fontSize="5em" />{" "}
            </>
          ) : (
            <>
              <DarkMode />
              <BsThreeDots fontSize="3em" color="gray" />
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
      {arr && (
        <KeyboardArrowDownIcon
          style={{ position: "absolute", right: "-16px", bottom: "18px" }}
        />
      )}
    </li>
  );
};

export default Header;
