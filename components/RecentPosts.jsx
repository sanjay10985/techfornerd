import React from "react";
import styles from "../styles/RecentPosts.module.css";
import Image from "next/image";
// import Link from "next/link";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";

const RecentPosts = ({ title, slug, photoUrl, createdAt }) => {
    const mode = useSelector(selectMode);   
    const animate_text = (e) =>{
        // const aniText = e.target.firstElementChild.nextElementSibling.firstElementChild.firstElementChild;
        const aniText = e.target.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild;
        
        // nextElementSibling;
        aniText.classList.toggle('animateRecentText');
        console.log(aniText)
    }

    return (
    <div
      className={styles.recentPostsDiv}
      id="recentPostsDiv"
      
    >
      <div className={styles.recentPostsImg}
        onMouseEnter={animate_text}
        onMouseLeave={animate_text}      
      >
        <Image src={photoUrl} layout="fill" objectFit="cover" alt="postThumbnail" />
      </div>
      <div className={styles.recentPostsDesc}>
        <h2 className={styles.recentPostTitle}>
          <a href={`post/${slug}`}
            style={{
                backgroundImage: mode
                  ? "linear-gradient(white, white)"
                  : "linear-gradient(black, black)",
                color: mode ? "white" : "black",
              }}
          >{title}</a>
        </h2>
        <label>
          {moment(createdAt).format("MMM DD,YYYY")}
        </label>
      </div>
    </div>
  );
};

export default RecentPosts;
