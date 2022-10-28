import React, { useEffect, useState } from "react";
import { getFeaturedPosts } from "../services";
import styles from "../styles/FeaturedPostBox.module.css";
import Link from "next/link";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Avatar } from "@mui/material";
import moment from "moment";

const FeaturedPostBox = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    getFeaturedPosts().then((posts) => setFeaturedPosts(posts));
  }, []);

  const animate_text = () => {
    const imgbox = document.getElementsByClassName("imgbox");
    Array.from(imgbox).forEach((e) => {
      const postText =
        e.nextElementSibling.firstElementChild.nextElementSibling
          .firstElementChild;
      e.addEventListener("mouseenter", () => {
        postText.classList.toggle("animateText");
      });
      postText.classList.remove("animateText");
    });
  };

  const animate_img = () => {
    const textAni = document.getElementsByClassName("link");
    Array.from(textAni).forEach((e) => {
      e.addEventListener("mouseenter", () => {
        const imgBox = e.parentElement.parentElement.previousElementSibling;
        imgBox.classList.add("animateImg");
      });
      e.addEventListener("mouseleave", () => {
        const imgBox = e.parentElement.parentElement.previousElementSibling;
        imgBox.classList.remove("animateImg");
      });
    });
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
          // className={styles.box}
          id="box1Div"
          className={`${styles["box1"]} ${styles["box"]}`}
          onMouseEnter={animate_text}
          onMouseLeave={animate_text}
        >
          {featuredPosts.slice(-1).map((post) => (
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
                  style={{
                    backgroundImage: `linear-gradient(180deg, transparent, black),url(${post.featuredImage.url})`,
                    // backgroundSize: '180%'
                  }}
                ></div>
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
                      {
                        <Avatar
                          src={post.author.photo.url}
                          id={styles.authorAvatar}
                        />
                      }
                      <p id={styles.authorName}> by {post.author.name}</p>
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
            onMouseEnter={animate_text}
            onMouseLeave={animate_text}
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
                    style={{
                      backgroundImage: `linear-gradient(180deg, transparent, black),url(${post.featuredImage.url})`,
                    }}
                  ></div>
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
              onMouseEnter={animate_text}
              onMouseLeave={animate_text}
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
                      style={{
                        backgroundImage: `linear-gradient(180deg, transparent, black),url(${post.featuredImage.url})`,
                      }}
                    ></div>
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
              onMouseEnter={animate_text}
              onMouseLeave={animate_text}
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
                      style={{
                        backgroundImage: `linear-gradient(180deg, transparent, black),url(${post.featuredImage.url})`,
                        backgroundPosition: "top",
                      }}
                    ></div>
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
