import React, { useEffect, useState } from "react";
import { getFeaturedPosts } from "../services";
import styles from "../styles/FeaturedPostBox.module.css";
import FeaturedPosts from "../components/FeaturedPosts";

const FeaturedPostBox = () => {
  const [featuredPosts, setFeaturedPosts] = useState([])
  
  useEffect(() => {
    getFeaturedPosts().then((fposts) => setFeaturedPosts(fposts));

  },[])

  return (
    <div className={styles.featuredPostBox}>
      <div
        className={styles.featuredPostdiv}
        id="featuredPostDiv"
        style={{ width: "100%" }}
      >
        <div id="box1Div" className={`${styles["box1"]} ${styles["box"]}`}>
        {featuredPosts.slice(-1).map((post) => (
            // {post.categories.map((ca))}
          <FeaturedPosts
          post={post}
            key={post.id}
            authorImg = {post.author.photo.url}
            excerpt={post.excerpt}
            font = "3.4em"
            bgpos='center'
            right="25px"
          />
          ))}
        </div>
        <div className={styles.box2} id="box2Div">
          <div className={`${styles["box3"]} ${styles["box"]}`} id="box3Div">
          {featuredPosts.slice(-2,-1).map((post) => (
          <FeaturedPosts
            post={post}
            key={post.id}
            
            bgpos="center"
            font="2.8em"
            right="25px"
          />
          ))}
          </div>
          <div className={styles.box4} id="box4Div">
            <div className={`${styles["box5"]} ${styles["box"]}`} id="box5Div">
            {featuredPosts.slice(-3,-2).map((post) => (
            // {post.categories.map((ca))}
          <FeaturedPosts
            
            post={post}
            key={post.id}
            
            bgpos="top"
            font="2.2em"
            left="18px"
            right="12px"
          />
          ))}
            </div>
            <div className={`${styles["box6"]} ${styles["box"]}`} id="box6Div">
              {featuredPosts.slice(-4, -3).map((post) => (
                <FeaturedPosts
           
            key={post.id}
                post={post}
            bgpos="top"
            font="2.2em"
            left="18px"
            right="12px"
          />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @media only screen and (max-width: 990px) {
            #box_1 {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FeaturedPostBox;
