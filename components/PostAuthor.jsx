import Image from "next/image";
import React from "react";
import styles from "../styles/PostAuthor.module.css";

const PostAuthor = ({ author }) => {
  return (
    <div className={styles.postAuthor}>
      <div className={styles.authorImage}>
        <Image
        src={author.photo.url} 
        layout="fill" 
        objectFit="cover" 
        />
      </div>
      <div className={styles.authorDiscription}>
        <h4 className={styles.authorName}>{author.name}</h4>
      </div>
    </div>
  );
};

export default PostAuthor;
