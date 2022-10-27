import React, { useEffect, useState } from "react";
import FeaturedPosts from "../components/FeaturedPosts";
import { getFeaturedPosts,getTrendPosts,getPosts } from "../services";
import styles from "../styles/FeaturedPostBox.module.css";

const FeaturedPostBox = ({posts}) => {

  const[featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() =>  {
    getFeaturedPosts().then((posts) => setFeaturedPosts(posts));
  },[])
  
  const animate_text = () => {
    const imgbox = document.getElementsByClassName("imgbox");
    Array.from(imgbox).forEach((e) => {
      const postText = e.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
      // console.log(postText);
      e.addEventListener("mouseenter", () => {
        postText.classList.toggle("animateText");
      });
      postText.classList.remove("animateText");
    });
  };
  console.log(featuredPosts)  

  return (
    <div className="featuredPostBox">
      <div className={styles.featuredPostdiv} style={{ width: "100%" }}>
        <div
          className={styles.box}
          id={styles.box_1}
          onMouseEnter={animate_text}
          onMouseLeave={animate_text}
        >
          {featuredPosts.slice(-1).map((post) => (
            // {post.categories.map((ca))}
          <FeaturedPosts
            title={post.title}
            imgSrc={post.featuredImage.url}
            slug={post.slug}
            key={post.id}
            category ={post.categories[0].name}
            // catcolor="#C42323"
            catcolor={post.categories[0].color.hex}
            authorName = {post.author.name}
            authorImg = {post.author.photo.url}
            createdAt = {post.createdAt}
            excerpt={post.excerpt}
            font = {true}
            bgpos='center'
          />
          ))}
        </div>
        <div id={styles.box_2}>
          <div
            className={styles.box}
            id={styles.box_3}
            onMouseEnter={animate_text}
            onMouseLeave={animate_text}
          >
            {featuredPosts.slice(-2,-1).map((post) => (
            // {post.categories.map((ca))}
          <FeaturedPosts
            title={post.title}
            imgSrc={post.featuredImage.url}
            slug={post.slug}
            key={post.id}
            category ={post.categories[0].name}
            catcolor={post.categories[0].color.hex}
            authorName = {post.author.name}
            createdAt = {post.createdAt}
            bgpos="center"
          />
          ))}
          </div>
          <div id="box_4" style={{ display: "flex", height: "50%" }}>
            <div
              className={styles.box}
              id={styles.box_5}
              onMouseEnter={animate_text}
              onMouseLeave={animate_text}
            >
              {featuredPosts.slice(-3,-2).map((post) => (
            // {post.categories.map((ca))}
          <FeaturedPosts
            title={post.title}
            imgSrc={post.featuredImage.url}
            slug={post.slug}
            key={post.id}
            category ={post.categories[0].name}
            catcolor={post.categories[0].color.hex}
            authorName = {post.author.name}
            createdAt = {post.createdAt}
            bgpos="top"
          />
          ))}
            </div>
            <div
              className={styles.box}
              id={styles.box_6}
              onMouseEnter={animate_text}
              onMouseLeave={animate_text}
            >
              {featuredPosts.slice(-4,-3).map((post) => (
            // {post.categories.map((ca))}
          <FeaturedPosts
            title={post.title}
            imgSrc={post.featuredImage.url}
            slug={post.slug}
            key={post.id}
            category ={post.categories[0].name}
            catcolor={post.categories[0].color.hex}
            authorName = {post.author.name}
            createdAt = {post.createdAt}
            bgpost="top center"
          />
          ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getTrendPosts()) || [];
  return {
    props: { posts },
  };
}
export default FeaturedPostBox;
