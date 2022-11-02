import styles from "../styles/TextCarousel.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import { selectMode } from "../features/darkModeReducer";
import { useSelector } from "react-redux";

const TextCarousel = ({ trendPosts }) => {
  const [index, setIndex] = useState(0);
  const mode = useSelector(selectMode);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((count) => loop(count + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  function loop(count) {
    if (count == trendPosts.length) {
      return (count = 0);
    }
    if (count < 0) {
      return (count = trendPosts.length - 1);
    }
    return count;
  }

  return (
    <div className={styles.textCarousel}>
      <span className={styles.carouselTitle}>Trending:</span>
      <div className={styles.carouselDiv}>
        <div className={styles.trendingTitles}>
          <span>
            <Link 
            href={`/post/${trendPosts[index].slug}`}
            >
            <a
              className={styles.title}
              style={{
                backgroundImage: mode
                  ? "linear-gradient(white,white)"
                  : "linear-gradient(rgb(79, 77, 77),rgb(79, 77, 77))",
                color: mode ? "rgb(229, 221, 194)" : "rgb(80, 75, 75)",
              }}
            >
           
              {true && !undefined ? trendPosts[index].title : ""}
            </a>
            </Link>
          </span>
        </div>
        <div className={styles.carouselButtons} style={{ color: mode ? "white":'black' }} id="textCarouselButtons">
          <AiFillLeftCircle
            onClick={(e) => setIndex((count) => loop(count - 1))}
          />
          <AiFillRightCircle
            onClick={(e) => setIndex((count) => loop(count + 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
