import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BsArrowUpShort } from "react-icons/bs";
import styles from '../styles/Layout.module.css'
import { IconButton } from "@mui/material";
import { useEffect } from "react";


const Layout = ({ children }) => {
  
  useEffect(() => {
    window.addEventListener("scroll", listenScroll)
  },[])

  const listenScroll = () =>{
    // console.log(document.documentElement.scrollTop)
    const toTop = document.getElementById('toTop')
    const scrollTop = document.documentElement.scrollTop;
    if(scrollTop > 600)
    {
      toTop.classList.add('active')
    }
    else{
      
      toTop.classList.remove('active')
    }

  }

  const toTop = () =>{
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }

  return (
    <div className="layout">
      <Header  />
      {children}
      <div id="toTop" className={styles.toTopDiv} onClick={toTop}>
      <IconButton>
      <BsArrowUpShort className={styles.toTopButton} fontWeight="700"/>
      </IconButton>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
