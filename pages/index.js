import Head from "next/head";
import styles from "../styles/Home.module.css";
import {FeaturedPostBox, TopHighlightsPosts} from "../containers";
import { getFeaturedPosts } from "../services";


export default function Home({posts}) {

    console.log(posts)

  return (
    <div className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPostBox featuredPosts={posts}/>
      <TopHighlightsPosts/>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getFeaturedPosts()) || [];
  return {
    props: { posts },
  };
}
