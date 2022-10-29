import React, { useEffect, useState } from "react";
import { getFeaturedPosts } from "../services";
import styles from "../styles/FeaturedPostBox.module.css";
import Link from "next/link";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import moment from "moment";
import Image from "next/image";

const FeaturedPostBox = ({ featuredPosts }) => {


  const animate_text = (e) => {
    // const imgbox = e.target.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
    const textDiv = e.target.nextElementSibling;
    const imgbox =
      textDiv.firstElementChild.nextElementSibling.firstElementChild;
    // const imgbox = e.target.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
    imgbox.classList.toggle("animateText");
  };

  const animate_img = (e) => {
    const textAni = e.target.parentElement.parentElement.previousElementSibling;
    textAni.classList.toggle("animateImg");
  };
  // console.log(featuredPosts);

  return (
    <div className={styles.featuredPostBox}>
      <div
        className={styles.featuredPostdiv}
        id="featuredPostDiv"
        style={{ width: "100%" }}
      >
        <div
          id="box1Div"
          className={`${styles["box1"]} ${styles["box"]}`}
          >
          {featuredPosts.slice(-1).map((post) => (
            <Link
            id={styles.postLink}
            href={`posts/${post.slug}`}
            style={{ cursor: "pointer" }}
            key={post.id}
            >
              <div className={styles.featuredPost}>
                <div
                  id={styles.imgbox}
                  className="imgbox"
                    onMouseEnter={animate_text}
                    onMouseLeave={animate_text}
                    >
                  <Image
                    layout="fill"
                    src={post.featuredImage.url}
                    objectFit="cover"
                  />
                </div>
                <div className={styles.textDisc}>
                  <div
                    id={styles.categoryDiv}
                    style={{
                      backgroundColor: `${post.categories[0].color.hex}`,
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: "white", fontSize: 20 }}
                    />
                    <label id={styles.category}>
                      {post.categories[0].name}
                    </label>
                  </div>

                  <a
                    className={styles.featuredPostTitle}
                    href={`posts/${post.slug}`}
                  >
                    <h1
                      className="link"
                      id="fplTitle"
                      // style={{
                      //   fontSize: "3.6em",
                      //   fontWeight: "600",
                      // }}
                      onMouseEnter={animate_img}
                      onMouseLeave={animate_img}
                    >
                      {post.title}
                    </h1>
                  </a>
                  <p className={styles.excerpt} id="fplExcerpt">
                    {post.excerpt}
                  </p>
                  <div id={styles.postDetails}>
                    <div id={styles.authorDiv}>
                      
                        <Image
                        
                          src={post.author.photo.url}
                          id={styles.authorAvatar}
                          width="40px"
                          height="40px"
                          style={{borderRadius: '50%', marginRight: '1em'}}
                          alt="AuthorImage"
                          objectFit="cover"
                        />
                      
                      <p id={styles.authorName} style={{marginLeft: '1em'}}> by {post.author.name}</p>
                    </div>
                    <label></label>
                    <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.box2} id="box2Div">
          <div
            className={`${styles["box3"]} ${styles["box"]}`}
            id="box3Div"
            >
            {featuredPosts.slice(-2, -1).map((post) => (
              // {post.categories.map((ca))}
              <Link
              id={styles.postLink}
              href={`posts/${post.slug}`}
              style={{ cursor: "pointer" }}
              key={post.id}
              >
                <div className={styles.featuredPost}>
                <div
                  id={styles.imgbox}
                  className="imgbox"
                    onMouseEnter={animate_text}
                    onMouseLeave={animate_text}
                    >
                  <Image
                    layout="fill"
                    src={post.featuredImage.url}
                    objectFit="cover"
                  />
                </div>
                  <div className={styles.textDisc}>
                    <div
                      id={styles.categoryDiv}
                      style={{
                        backgroundColor: `${post.categories[0].color.hex}`,
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ color: "white", fontSize: 20 }}
                      />
                      <label id={styles.category}>
                        {post.categories[0].name}
                      </label>
                    </div>

                    <a
                      className={styles.featuredPostTitle}
                      href={`posts/${post.slug}`}
                    >
                      <h1
                        className="link"
                        id="fprTitle"
                        style={{
                          fontSize: "2.6em",
                          fontWeight: "600",
                        }}
                        onMouseEnter={animate_img}
                        onMouseLeave={animate_img}
                      >
                        {post.title}
                      </h1>
                    </a>
                    <div id={styles.postDetails}>
                      <div id={styles.authorDiv}>
                        <p id={styles.authorName}> by {post.author.name}</p>
                      </div>
                      <label></label>
                      <span>
                        {moment(post.createdAt).format("MMM DD, YYYY")}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.box4} id="box4Div">
            <div
              className={`${styles["box5"]} ${styles["box"]}`}
              id="box5Div"
              >
              {featuredPosts.slice(-3, -2).map((post) => (
                // {post.categories.map((ca))}
                <Link
                id={styles.postLink}
                href={`posts/${post.slug}`}
                style={{ cursor: "pointer" }}
                key={post.id}
                >
                  <div className={styles.featuredPost}>
                  <div
                  id={styles.imgbox}
                  className="imgbox"
                    onMouseEnter={animate_text}
                    onMouseLeave={animate_text}
                    >
                  <Image
                    layout="fill"
                    src={post.featuredImage.url}
                    objectFit="cover"
                  />
                </div>
                    <div className={styles.textDisc}>
                      <div
                        id={styles.categoryDiv}
                        style={{
                          backgroundColor: `${post.categories[0].color.hex}`,
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{ color: "white", fontSize: 20 }}
                        />
                        <label id={styles.category}>
                          {post.categories[0].name}
                        </label>
                      </div>

                      <a
                        className={styles.featuredPostTitle}
                        href={`posts/${post.slug}`}
                      >
                        <h1
                          className="link"
                          style={{
                            fontSize: "2.2em",
                            fontWeight: "600",
                          }}
                          onMouseEnter={animate_img}
                          onMouseLeave={animate_img}
                        >
                          {post.title}
                        </h1>
                      </a>
                      <div id={styles.postDetails}>
                        <div id={styles.authorDiv}>
                          <p id={styles.authorName}> by {post.author.name}</p>
                        </div>
                        <label></label>
                        <span>
                          {moment(post.createdAt).format("MMM DD, YYYY")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div
              className={`${styles["box6"]} ${styles["box"]}`}
              id="box6Div"
              >
              {featuredPosts.slice(-4, -3).map((post) => (
                // {post.categories.map((ca))}
                <Link
                id={styles.postLink}
                href={`posts/${post.slug}`}
                style={{ cursor: "pointer" }}
                key={post.id}
                >
                  <div className={styles.featuredPost}>
                  <div
                  id={styles.imgbox}
                  className="imgbox"
                    onMouseEnter={animate_text}
                    onMouseLeave={animate_text}
                    >
                  <Image
                    layout="fill"
                    src={post.featuredImage.url}
                    objectFit="cover"
                  />
                </div>
                    <div className={styles.textDisc}>
                      <div
                        id={styles.categoryDiv}
                        style={{
                          backgroundColor: `${post.categories[0].color.hex}`,
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{ color: "white", fontSize: 20 }}
                        />
                        <label id={styles.category}>
                          {post.categories[0].name}
                        </label>
                      </div>

                      <a
                        className={styles.featuredPostTitle}
                        href={`posts/${post.slug}`}
                      >
                        <h1
                          className="link"
                          style={{
                            fontSize: "2.2em",
                            fontWeight: "600",
                          }}
                          onMouseEnter={animate_img}
                          onMouseLeave={animate_img}
                        >
                          {post.title}
                        </h1>
                      </a>
                      <div id={styles.postDetails}>
                        <div id={styles.authorDiv}>
                          <p id={styles.authorName}> by {post.author.name}</p>
                        </div>
                        <label></label>
                        <span>
                          {moment(post.createdAt).format("MMM DD, YYYY")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
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
