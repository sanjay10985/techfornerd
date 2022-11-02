import React, { useEffect } from "react";
import PostDetail from "../../components/PostDetail";
import { getPostDetails, getPosts } from "../../services";
import { useState } from "react";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";

const PostDetails = ({ post }) => {

  const[domLoaded, setDomLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setDomLoaded(true);
  },[])

  return (
    <>
    {domLoaded && (<PostDetail post={post} />)}
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
