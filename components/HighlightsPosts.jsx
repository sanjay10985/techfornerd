import Image from "next/image";
import React from "react";
import styles from "../styles/HighlightsPosts.module.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { BsInfoCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";

const HighlightsPosts = ({
  title,
  postUrl,
  postPhoto,
  category,
  categoryUrl,
  catColor,
  excrept,
  authorName,
  authorImgUrl,
  createdAt,
  sponsored,
}) => {
  const mode = useSelector(selectMode);
    console.log(sponsored)
  return (
    <div className={styles.highlightsPosts}>
      <div
        className={styles.highlightsPostsImage}
        style={{ backgroundImage: `url(${postPhoto})` }}
      >
        <div
          id={styles.categoryDiv}
          style={{
            backgroundColor: `${catColor}`,
          }}
        >
          <FiberManualRecordIcon sx={{ color: "white", fontSize: 20 }} />
          <label id={styles.category}>{category}</label>
        </div>
      </div>
      {sponsored && (<>
        <div
          className={styles.sponsoredPostDiv}
          style={{ color: mode ? "#a1a1a8" : "#595d69" }}
        >
          <BsInfoCircle />
          <p>Sponsored</p>
        </div>
        </>
      )}
      
    </div>
  );
};

export default HighlightsPosts;
