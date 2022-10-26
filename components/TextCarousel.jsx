// import React, { useEffect, useState } from "react";
import { getTrendPosts } from "../services";
import styles from '../styles/TextCarousel.module.css'

const TextCarousel = ({ posts }) => {
  // const [trendPosts, setTrendPosts] = useState([]);

  // useEffect(() => {
  //   getTrendPosts().then((newTrendPosts) => setTrendPosts(newTrendPosts));
  // }, []);

  return (
    <div className={styles.textCarousel}>
      {/* <label> Trending:</label>
      <div className={styles.textDiv}>
        <div className={styles.titleLabel}>
      {trendPosts.slice(-3).map((post, id) => (
        <h1 key={id}>{post.title}</h1>
      ))}
      </div>
      </div> */}
    </div>
  );
};

export default TextCarousel;

// export async function getStaticProps() {
//   const posts = (await getTrendPosts()) || [];
//   return {
//     props: { posts },
//   };
// }
