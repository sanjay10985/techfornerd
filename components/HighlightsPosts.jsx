import Image from "next/image";
import React from "react";
import styles from "../styles/HighlightsPosts.module.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { BsInfoCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";
import AuthorCreate from "./AuthorCreate";
import Link from "next/link";

const HighlightsPosts = ({ post }) => {
  const mode = useSelector(selectMode);

  return (
    <div className={styles.highlightsPosts} id="highlightsPosts">
      <div className={styles.highlightsPostsImage} id="highlightsPostsImage">
        <Image
          src={post.featuredImage.url}
          alt="postThumbnail"
          layout="fill"
          objectFit="cover"
        />
        <div
          id={styles.categoryDiv}
          style={{
            backgroundColor: `${post.categories[0].color.hex}`,
            zIndex: "100"
          }}
        >
          <FiberManualRecordIcon sx={{ color: "white", fontSize: 20 }} />
          <label id={styles.category}>
            {" "}
            <a href={post.categories[0].slug}> {post.categories[0].name} </a>
          </label>
        </div>
      </div>
      <div
        className={styles.hlPostDesc}
        style={{ color: mode ? "#a1a1b7" : "#595d69" }}
      >
        {post.sponsored && (
          <>
            <div
              className={styles.sponsoredPostDiv}
              style={{ color: mode ? "#a1a1a8" : "#595d69" }}
            >
              <BsInfoCircle />
              <p>Sponsored</p>
            </div>
          </>
        )}<Link href={`/post/${post.slug}`} >
        <a className={styles.hlPostTitle}>
          <h1
            style={{
              backgroundImage: mode
                ? "linear-gradient(white, white)"
                : "linear-gradient(black, black)",
              color: mode ? "white" : "black",
            }}
          >
            {" "}
            {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
          </h1>
        </a>
        </Link>
        <p>{post.excerpt.slice()}...</p>
        <AuthorCreate
          authorName={post.author.name}
          authorImg={post.author.photo.url}
          createdAt={post.createdAt}
        />
      </div>
    </div>
  );
};

export default HighlightsPosts;
