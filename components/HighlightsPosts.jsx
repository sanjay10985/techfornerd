import Image from "next/image";
import React from "react";
import styles from "../styles/HighlightsPosts.module.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { BsInfoCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";
import { Avatar } from "@mui/material";
import moment from "moment/moment";

const HighlightsPosts = ({ post }) => {
  const mode = useSelector(selectMode);

  return (
    <div className={styles.highlightsPosts} id="highlightsPosts">
      <div
        className={styles.highlightsPostsImage}
        id="highlightsPostsImage"
        style={{ backgroundImage: `url(${post.featuredImage.url})` }}
      >
        <div
          id={styles.categoryDiv}
          style={{
            backgroundColor: `${post.categories[0].color.hex}`,
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
        )}
        <a href={`posts/${post.slug}`} className={styles.hlPostTitle}>
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
        <p>{post.excerpt.slice()}...</p>
      <div
        className={styles.hlAuthorBox}
        style={{ color: mode ? "#a1a1b7" : "#595d69" }}
      >
        <a href="/" className={styles.hlAuthorDiv}>
          <Avatar src={post.author.photo.url} id="authorDiv" />
          <label htmlFor="authorDiv">
            by{" "}
            {post.author.name.charAt(0).toUpperCase() +
              post.author.name.slice(1)}
          </label>
        </a>
        <label
          style={{ backgroundColor: mode ? "#a1a1b7" : "#595d69" }}
        ></label>
        <span>{moment(post.createdAt).format("MMM DD,YYYY")}</span>
      </div>
      </div>
    </div>
  );
};

export default HighlightsPosts;
