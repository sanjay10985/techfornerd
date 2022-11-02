import React from "react";
import { selectMode } from "../features/darkModeReducer";
import { useSelector } from "react-redux";
import styles from "../styles/AuthorCreate.module.css";
import Image from "next/image";
import moment from "moment/moment";
import Link from "next/link";

const AuthorCreate = ({ authorName, authorImg, createdAt }) => {
  const mode = useSelector(selectMode);

  return (
    <div
      className={styles.AuthorBox}
      style={{ color: mode ? "#a1a1b7" : "#595d69" }}
    >
      <Link href="*" className={styles.AuthorBox}>
        <div className={styles.AuthorDiv}>
        <Image
          src={authorImg}
          id={styles.authorAvatar}
          width="40px"
          height="40px"
          style={{
            borderRadius: "50%",
            marginRight: "1em",
            filter: "brightness(120%)",
          }}
          alt="AuthorImage"
          objectFit="cover"
        />
        <span>
          by
          <a href="#" className={styles.authorName}
            style={{backgroundImage: mode ? "linear-gradient(white,white)" : "linear-gradient(black,black)"}}
          >
            {authorName.charAt(0).toUpperCase() + authorName.slice(1)}
          </a>
        </span>
        </div>
      </Link>
      <label style={{ backgroundColor: mode ? "#a1a1b7" : "#595d69" }}></label>
      <span>{moment(createdAt).format("MMM DD,YYYY")}</span>
    </div>
  );
};

export default AuthorCreate;
