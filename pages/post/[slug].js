import React from 'react'
import { getPostDetails, getPosts } from '../../services';

const PostDetails = ({post}) => {
  return (
    <div>
      
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}){
    const data = await getPostDetails(params.slug);
   
    return{
        props: {post: data}
    };
}

export async function getStaticPaths()
{
    const posts = await getPosts();

    return{
        paths: posts.map(({node:{slug}}) => ({params: {slug}})),
        fallback: false,
    };
}