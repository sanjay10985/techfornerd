import Link from "next/link";
import React from "react";
import styles from "../styles/FeaturedPosts.module.css";

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
const FeaturedPosts = ({ title, imgSrc, slug }) => {
  


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
          }}
        >
          {" "}
        </div>
        <div className={styles.textDisc}>
          
          <h1 className={styles.featuredPostTitle}>
            
            <a
              className="link"
              href={`posts/${slug}`}
            //   onMouseEnter={animate_img}
            //   onMouseLeave={animate_img}
            >

              {title}   
            </a>
          </h1>
        </div>
        
      </div>
    </Link>
  );
};

export default FeaturedPosts;
