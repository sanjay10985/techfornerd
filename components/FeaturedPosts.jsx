import Link from "next/link";
import React from "react";
import styles from "../styles/FeaturedPosts.module.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import moment from "moment";
import Image from "next/image";

const FeaturedPosts = ({
  authorImg,
  post,
  excerpt,
  font,
  bgpos,
  right,
  left,
}) => {
  const animate_text = (e) => {
    const textDiv = e.target.nextElementSibling;
    const imgbox =
      textDiv.firstElementChild.nextElementSibling.firstElementChild;
    imgbox.classList.toggle("animateText");
  };

  const animate_img = (e) => {
    const textAni = e.target.parentElement.parentElement.previousElementSibling;
    textAni.classList.toggle("animateImg");
  };

  return (
    <Link
      id={styles.postLink}
      href={`post/${post.slug}`}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.featuredPost}>
        <div
          id={styles.imgbox}
          className="imgbox"
          style={{
            backgroundImage: `linear-gradient(180deg, transparent, black),url(${post.featuredImage.url})`,
            backgroundPosition: `${bgpos}`,
          }}
          onMouseEnter={animate_text}
          onMouseLeave={animate_text}
        >
          {" "}
        </div>
        <div
          className={styles.textDisc}
          id="textDisc"
          style={{ right: right, left: left }}
        >
          <div
            id={styles.categoryDiv}
            style={{ backgroundColor: `${post.categories[0].color.hex}` }}
          >
            <FiberManualRecordIcon sx={{ color: "white", fontSize: 20 }} />
            <label id={styles.category}> {post.categories[0].name}</label>
          </div>
          <Link href={`post/${post.slug}`}>
            <a className={styles.featuredPostTitle}>
              <h1
                className="link"
                style={{ fontSize: font }}
                onMouseEnter={animate_img}
                onMouseLeave={animate_img}
              >
                {post.title}
              </h1>
            </a>
          </Link>
          {excerpt && (
            <p id={styles.excerpt} className="featuredExcerpt">
              {excerpt}
            </p>
          )}
          <div id={styles.postDetails}>
            <div id={styles.authorDiv}>
              {authorImg && (
                <Image
                  src={authorImg}
                  id={styles.authorAvatar}
                  width="40px"
                  height="40px"
                  style={{ borderRadius: "50%", paddingRight: "0em" }}
                  alt="AuthorImage"
                  objectFit="cover"
                />
              )}
              <span id={styles.authorName}>
                {" "}
                by{" "}
                <a href="#" className={styles.authorNameLink}>
                  {" "}
                  {post.author.name}{" "}
                </a>
              </span>
            </div>
            <label></label>
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPosts;
