import Link from "next/link";
import React from "react";
import styles from "../styles/FeaturedPosts.module.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import { Category } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import moment from "moment";

const FeaturedPosts = ({ title, imgSrc, slug, category, catcolor, authorName, authorImg, createdAt,excerpt,font, bgpos }) => {
  // console.log(authorName)


  return (
    <Link
      id={styles.postLink}
      href={`posts/${slug}`}
      style={{ cursor: "pointer" }}
    >
      <div
        className={styles.featuredPost}
        
      >
        <div
          id={styles.imgbox}
          className="imgbox"
          style={{
            backgroundImage: `linear-gradient(180deg, transparent, black),url(${imgSrc})`,
            backgroundPosition: `${bgpos}`
          }}
        >
          {" "}
        </div>
        <div className={styles.textDisc}>
          
            <div id={styles.categoryDiv} style={{backgroundColor: `${catcolor}`}}>
            <FiberManualRecordIcon sx={{color: 'white', fontSize: 20}} />
            <label id={styles.category}> {category}</label>
            </div>
          
          <a className={styles.featuredPostTitle} href={`posts/${slug}`}>
            
            <h1
              className="link" style={{fontSize: font ? '3.6em': '2.6em', fontWeight: '600'}}
              
            //   onMouseEnter={animate_img}
            //   onMouseLeave={animate_img}
            >

              {title}   
            </h1>
          </a>
          {excerpt &&  <p id={styles.excerpt}>{excerpt}</p>}
          <div id={styles.postDetails}>
          <div id={styles.authorDiv}>
           { authorImg && <Avatar src={authorImg} id={styles.authorAvatar}  />}
           <p id={styles.authorName}> by  {authorName}</p>
          </div>
          <label></label>
          <span>{moment(createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
        
      </div>
    </Link>
  );
};

export default FeaturedPosts;







// const animate_img = () => {
//   const textAni = document.getElementsByClassName("link");
  // console.log(textAni);
  // console.log(textAni)
//   Array.from(textAni).forEach((e) =>{
//       e.addEventListener('mousemove', () =>{
//           const postImg = e.parentElement.parentElement.previousElementSibling
//           postImg.classList.toggle('animateImg');
//         console.log(postImg.classList)
//       })
//   })

  // Array.from(textAni).forEach((e) => {   
  //   e.addEventListener("mouseenter", () => {
  //     //   const postimg = e.parentElement.parentElement.previousElementSibling;
  //       const postimg = e.parentElement;
  //     //   e.classList.add("animateImg");
  //     console.log(postimg);
  // });
  // e.addEventListener("mouseleave", () => {
  //     // const postimg = e.parentElement.parentElement.previousElementSibling;
  //     e.classList.remove("animateImg");
  //     console.log(e);
  //   });
  // });
// };