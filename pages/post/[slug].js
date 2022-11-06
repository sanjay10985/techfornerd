import React, { useEffect } from "react";
import { getCategories, getPostDetails, getPosts } from "../../services";
import { useState } from "react";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";
import styles from "../../styles/PostDetails.module.css";
import CategoryColorLabel from "../../components/CategoryColorLabel";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import PostContent from "../../components/PostContent";
import { selectMode } from "../../features/darkModeReducer";
import { useSelector } from "react-redux";
import PostCategories from "../../components/PostCategories";
import PostsWidget from "../../components/PostsWidget";
import PostAuthor from "../../components/PostAuthor";

const PostDetails = ({ post }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const router = useRouter();
  const mode = useSelector(selectMode);

  if (router.isFallback) {
    return <Loader />;
  }

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setDomLoaded(true);
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <main className={styles.postDetailsBox} id="postDetailsBox">
      <div className={styles.featuredImageBox}>
        <div
          className={styles.featuredImageDiv}
          id="featuredImageDiv"
          style={{ backgroundImage: `url(${post.featuredImage.url})` }}
        >
          <div className={styles.postDetails} id="postDetails">
            <CategoryColorLabel category={post.categories[0]} />
            <h2>{post.title}</h2>
            <div className={styles.postMoreDetails}>
              <div className={styles.hlAuthorBox}>
                <Link href="#">
                  <a className={styles.hlAuthorDiv}>
                    <Image
                      src={post.author.photo.url}
                      width="40px"
                      height="40px"
                      style={{
                        borderRadius: "50%",
                        filter: `brightness(200%)`,
                      }}
                      alt="AuthorImage"
                      objectFit="cover"
                    />
                    <label>
                      by
                      <label>
                        {post.author.name.charAt(0).toUpperCase() +
                          post.author.name.slice(1)}
                      </label>
                    </label>
                  </a>
                </Link>
              </div>
              <label></label>
              <span>{moment(post.createdAt).format("DD MMM, YYYY")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.postContentBox} id="postContentBox">
        <div className={styles.postContentDiv} id="postContentDiv">
          <PostContent post={post.content.raw.children} />
          <PostAuthor author={post.author}/>

          
        </div>
        <div className={styles.moreDetailsRight} id="moreDetailsRight">
          <div className={styles.categoryBox}>
            <h5
              className={styles.categoryHeading}
              style={{ color: mode ? "white" : "black" }}
            >
              Categories
            </h5>
            {categories.map((category) => (
              <PostCategories
                key={category.id}
                category={category}
                slug={category.slug}
              />
            ))}
          </div>
          <div className={styles.similarPostsDiv} id="similarPostsDiv">
            <PostsWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
