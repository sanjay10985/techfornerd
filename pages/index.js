import Head from "next/head";
import FeaturedPostBox from "../containers/FeaturedPostBox";
// import TextCarousel from "../components/TextCarousel";
import styles from "../styles/Home.module.css";


export default function Home() {

  // console.log(posts.slice(-3,-2))

  return (
    <div className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPostBox/>
    </div>
  );
}