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
      const postText = e.nextElementSibling.firstElementChild.firstElementChild;
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

          <FeaturedPosts
            title={post.title}
            imgSrc={post.featuredImage.url}
            slug={post.slug}
            key={post.id}
            category ={post.categories.name}
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
            <FeaturedPosts
              title="It's ok if you are not able to do but you should give your best"
              imgSrc="https://source.unsplash.com/random/?animation"
              slug="Hello"
            />
          </div>
          <div id="box_4" style={{ display: "flex", height: "50%" }}>
            <div
              className={styles.box}
              id={styles.box_5}
              onMouseEnter={animate_text}
              onMouseLeave={animate_text}
            >
              <FeaturedPosts
                title="Happy diwali to everyone be happy!"
                imgSrc="https://source.unsplash.com/random/?festival"
                slug="how"
              />
            </div>
            <div
              className={styles.box}
              id={styles.box_6}
              onMouseEnter={animate_text}
              onMouseLeave={animate_text}
            >
              <FeaturedPosts
                title="Why be sad when you can be Happy"
                imgSrc="https://source.unsplash.com/random/?city"
                slug="you"
              />
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
