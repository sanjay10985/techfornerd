import React, { useEffect } from "react";
import styles from "../../styles/PostDetails.module.css";
import PostDetail from "../../components/PostDetail";
import { getPostDetails, getPosts } from "../../services";
import { useState } from "react";

const PostDetails = ({ post }) => {

  const[domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  },[])

  return (
    <>
    {domLoaded && (<PostDetail post={post} slug={post.slug} categories={post.categories.map((category) => category.slug)}/>)}
    </>
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
