import Image from "next/image";
import React from "react";
import styles from "../styles/BlogLayoutOne.module.css";
import CategoryColorLabel from "./CategoryColorLabel";
import { selectMode } from "../features/darkModeReducer";
import { useSelector } from "react-redux";
import AuthorCreate from "./AuthorCreate";

const BlogLayoutOne = ({ posts }) => {
  const mode = useSelector(selectMode);

  return (
    <div className={styles.blogPostBox}>
      {posts.map((post) => (
        <div key={post.id} className={styles.blogPostDiv}>
          <div className={styles.blogPostImgBox}>
            <Image
              src={post.featuredImage.url}
              layout="fill"
              objectFit="cover"
              alt="postThumbnail"
            />
          </div>
          <div className={styles.blogPostDetailsBox}>
            <CategoryColorLabel category={post.categories[0]} />
            <h3 className={styles.postTitle}>
              <a
                href={`/post/${post.slug}`}
                style={{
                  backgroundImage: mode
                    ? "linear-gradient(white,white)"
                    : "linear-gradient(black,black)",
                    color: mode ? 'white' : 'black'
                }}
              >
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </a>
            </h3>
            <p style={{color: mode ? 'white' : 'black'}} className={styles.postExcerpt}>{post.excerpt}</p>
            <AuthorCreate authorName={post.author.name} authorImg={post.author.photo.url} createdAt={post.createdAt}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogLayoutOne;
