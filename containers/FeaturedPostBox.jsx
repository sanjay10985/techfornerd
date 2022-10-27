import React, { useEffect, useState } from "react";
import FeaturedPosts from "../components/FeaturedPosts";
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
      // console.log(postText);
      e.addEventListener("mouseenter", () => {
        postText.classList.toggle("animateText");
      });
      postText.classList.remove("animateText");
    });
  };
  console.log(featuredPosts);

  return (
    <div className="featuredPostBox">
      <div className={styles.featuredPostdiv} style={{ width: "100%" }}>
        <div
          className={styles.box}
          id={styles.box_1}
          onMouseEnter={animate_text}
          onMouseLeave={animate_text}
        >
          {featuredPosts.slice(-1).map((post) => (
            // {post.categories.map((ca))}
            <Link
              id={styles.postLink}
              href={`posts/${post.slug}`}
              style={{ cursor: "pointer" }}
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
                        fontSize: "3.6em",
                        fontWeight: "600",
                      }}

                      //   onMouseEnter={animate_img}
                      //   onMouseLeave={animate_img}
                    >
                      {post.title}
                    </h1>
                  </a>
                  <p id={styles.excerpt}>{post.excerpt}</p>
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
        <div id={styles.box_2}>
          <div
            className={styles.box}
            id={styles.box_3}
            onMouseEnter={animate_text}
            onMouseLeave={animate_text}
          >
            {featuredPosts.slice(-2, -1).map((post) => (
              // {post.categories.map((ca))}
              <Link
              id={styles.postLink}
              href={`posts/${post.slug}`}
              style={{ cursor: "pointer" }}
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
                        fontSize: "2.6em",
                        fontWeight: "600",
                      }}

                      //   onMouseEnter={animate_img}
                      //   onMouseLeave={animate_img}
                    >
                      {post.title}
                    </h1>
                  </a>
                  <div id={styles.postDetails}>
                    <div id={styles.authorDiv}>
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
          <div id="box_4" style={{ display: "flex", height: "50%" }}>
            <div
              className={styles.box}
              id={styles.box_5}
              onMouseEnter={animate_text}
              onMouseLeave={animate_text}
            >
              {featuredPosts.slice(-3, -2).map((post) => (
                // {post.categories.map((ca))}
                <Link
                id={styles.postLink}
                href={`posts/${post.slug}`}
                style={{ cursor: "pointer" }}
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
                          fontSize: "2.6em",
                          fontWeight: "600",
                        }}
  
                        //   onMouseEnter={animate_img}
                        //   onMouseLeave={animate_img}
                      >
                        {post.title}
                      </h1>
                    </a>
                    <div id={styles.postDetails}>
                      <div id={styles.authorDiv}>
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
            <div
              className={styles.box}
              id={styles.box_6}
              onMouseEnter={animate_text}
              onMouseLeave={animate_text}
            >
              {featuredPosts.slice(-4, -3).map((post) => (
                // {post.categories.map((ca))}
                <FeaturedPosts
                  title={post.title}
                  imgSrc={post.featuredImage.url}
                  slug={post.slug}
                  key={post.id}
                  category={post.categories[0].name}
                  catcolor={post.categories[0].color.hex}
                  authorName={post.author.name}
                  createdAt={post.createdAt}
                  bgpost="top center"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostBox;
