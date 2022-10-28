import React, { useEffect, useState } from "react";
import styles from "../styles/TopHighlightsPosts.module.css";
import { BsHourglassTop } from "react-icons/bs";
import HighlightsPosts from "../components/HighlightsPosts";
import { getHighlightsPosts } from "../services";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";

const TopHighlightsPosts = () => {
  const [highlightPosts, setHighlightPosts] = useState([]);

  useEffect(() => {
    getHighlightsPosts().then((posts) => setHighlightPosts(posts));
  }, []);

  const mode = useSelector(selectMode);

  console.log(highlightPosts)

  return (
    <section className={styles.topHighlightsPosts}>
      <div className={styles.highlightLeftDiv}>
        <div style={{color: mode? 'white':'black'}}>
          <div className={styles.highlightTitleDiv} >
            <BsHourglassTop fontSize="3.5em" />
            <h1>Today's top highlights</h1>
          </div>
          <p>Latest game coupon codes, tutorials, hacks and nerdy news</p>
        </div>
        <div className={styles.highlightsPostsBox}>
          {highlightPosts.map((post) => (
            <HighlightsPosts
              title={post.title}
              postUrl={post.slug}
              postPhoto={post.featuredImage.url}
              category={post.categories[0].name}
              categoryUrl={post.categories[0].slug}
              catColor={post.categories[0].color.hex}
              excrept={post.excrept}
              key={post.id}
              authorName={post.author.name}
              authorImgUrl={post.author.photo.url}
              createdAt={post.createdAt}
              sponsored={post.sponsored}
            />
          ))}
        </div>
      </div>
      <div className={styles.highlightRightDiv}>
        <h1>heii this is right div for the social and trend div</h1>
        {/* Social accounts div */}
        {/* Trending categories div */}
        {/* Recent Posts */}
      </div>
    </section>
  );
};

export default TopHighlightsPosts;
