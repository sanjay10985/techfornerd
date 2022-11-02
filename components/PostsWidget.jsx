import React, { useState, useEffect } from "react";
import styles from "../styles/PostsWidget.module.css";
import Image from "next/image";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";
import { getRecentPosts, getSimilarPosts } from "../services";
import Link from "next/link";

const PostsWidget = ({ slug, categories }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const mode = useSelector(selectMode);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  });

  const animate_text = (e) => {
    const aniText =
      e.target.parentElement.parentElement.nextElementSibling.firstElementChild
        .firstElementChild;

    aniText.classList.toggle("animateRecentText");
  };

  return (
    <div
      className={styles.relatedPostsBox}
      id="relatedPostsBox"
      style={{ color: mode ? "white" : "black" }}
    >
      <h5 className={styles.widgetTitle}>
        {slug ? "Similar Posts" : "Recent Posts"}
      </h5>
      {relatedPosts.map((post) => (
        <Link key={post.id} href={`/post/${post.slug}`}>
          <div className={styles.relatedPostDiv}>
            <div
              className={styles.relatedPostsImg}
              onMouseEnter={animate_text}
              onMouseLeave={animate_text}
            >
              <Image
                src={post.featuredImage.url}
                layout="fill"
                objectFit="cover"
                alt="postThumbnail"
              />
            </div>
            <div className={styles.relatedPostsDesc}>
              <h2 className={styles.relatedPostTitle}>
                <Link href={`/post/${post.slug}`}>
                  <a
                    style={{
                      backgroundImage: mode
                        ? "linear-gradient(white, white)"
                        : "linear-gradient(black, black)",
                    }}
                  >
                    {post.title}
                  </a>
                </Link>
              </h2>
              <label>{moment(post.createdAt).format("MMM DD,YYYY")}</label>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsWidget;
