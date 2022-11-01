import React from "react";
import styles from "../styles/RecentPosts.module.css";
import Image from "next/image";
// import Link from "next/link";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";

const RecentPosts = ({ post}) => {
    const mode = useSelector(selectMode);   
    const animate_text = (e) =>{
        // const aniText = e.target.firstElementChild.nextElementSibling.firstElementChild.firstElementChild;
        const aniText = e.target.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild;
        
        // nextElementSibling;
        aniText.classList.toggle('animateRecentText');
        console.log(aniText)
    }

    console.log(post)

    return (
    <div
      className={styles.recentPostsDiv}
      id="recentPostsDiv"
      
    >
      <div className={styles.recentPostsImg}
        onMouseEnter={animate_text}
        onMouseLeave={animate_text}      
      >
        <Image src={post.featuredImage.url} layout="fill" objectFit="cover" alt="postThumbnail" />
      </div>
      <div className={styles.recentPostsDesc}>
        <h2 className={styles.recentPostTitle}>
          <a href={`post/${post.slug}`}
            style={{
                backgroundImage: mode
                  ? "linear-gradient(white, white)"
                  : "linear-gradient(black, black)",
                color: mode ? "white" : "black",
              }}
          >{post.title}</a>
        </h2>
        <label>
          {moment(post.createdAt).format("MMM DD,YYYY")}
        </label>
      </div>
    </div>
  );
};

export default RecentPosts;
