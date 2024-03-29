import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getHighlightsPosts, getTrendPosts } from "../services";
import { BsHourglassTop } from "react-icons/bs";
import HighlightsPosts from "../components/HighlightsPosts";
import { useSelector } from "react-redux";
import { selectMode } from "../features/darkModeReducer";
import SocialMedia from "../components/SocialMedia";
import Categories from "../containers/Categories";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import TextCarousel from "../components/TextCarousel";
import PostsWidget from "../components/PostsWidget";
import FeaturedPostBox from "../containers/FeaturedPostBox";
import Footer from "../components/Footer";

export default function Home({ highlightposts, trendposts }) {
  const mode = useSelector(selectMode);

  return (
    <div className={styles.home} id="home">
      <Head>
        <title>Itsjustacode - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TextCarousel trendPosts={trendposts} />
      <FeaturedPostBox />

      <section
        className={styles.topHighlightsPosts}
        id="topHighlightsPosts"
        style={{ color: mode ? "white" : "black" }}
      >
        <div className={styles.highlightLeftDiv}>
          <div style={{ color: mode ? "white" : "black",marginBottom: "4em" }}>
            <div className={styles.highlightTitleDiv}>
              <BsHourglassTop fontSize="3.5em" />
              <h1>Today's top highlights</h1>
            </div>
            <p>Latest game coupon codes, tutorials, hacks and nerdy news</p>
          </div>
          <div className={styles.highlightLeftSection}>
            <div className={styles.highlightsPostsBox}>
              {highlightposts.map((post) => (
                <HighlightsPosts post={post} key={post.id} />
              ))}
            </div>
            <form action="../blog"
              className={styles.morePostButtonDiv}
            >
              <button
                className={styles.morePostsButton}
                
              >
                Load more posts
              </button>
              <MdOutlineDownloadForOffline />
            </form>
          </div>
        </div>
        <div className={styles.highlightRightDiv} id="highlightRightDiv">
          <SocialMedia />
          <div className={styles.trendignTopics}>
            <h1>Trending Topics</h1>
            <Categories />
          </div>
          <div className={styles.recentPostnAd} id="recentPostnAd">
            <div className={styles.recentPostsBox}>
              <PostsWidget />
            </div>  
            <div className={styles.addShowDiv} id="container">
              <h1>Ads Will be Shown Here...</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const highlightposts = (await getHighlightsPosts()) || [];
  const trendposts = (await getTrendPosts()) || [];
  return {
    props: { highlightposts, trendposts },
  };
}
