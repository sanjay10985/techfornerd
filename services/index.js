import { request, gql } from "graphql-request";
import { selectMode } from "../features/postCountReducer";
// import { useSelec } from "../features/postCountReducer";
import { useSelector } from "react-redux";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredPost
            featuredImage {
              url
            }
            categories {
              name
              slug
              
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) 
    {
        post(where: { slug: $slug }) {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
            color {
              hex
            }
          }
          content {
            raw
            references {
              ... on Asset {
                id
                url
                width
                height
                handle
                fileName
                mimeType
              }
            }
          }
        }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};


export const getFeaturedPosts = async () => {
    const query = gql`
      query GetFeaturedPost() {
        posts(where: {featuredPost: true}){
                author {
                  name
                  id
                  photo {
                    url
                  }
                }
                createdAt
                slug
                id
                title
                featuredPost
                excerpt 
                featuredImage {
                  url
                }
                categories {
                  name
                  slug
                  color {
                    hex
                  }
                }
              }
      }   
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.posts;
  };

  
export const getTrendPosts = async () => {
    const query = gql`
      query GetTrendPost() {
        posts(
          where: {featuredPost: true}
          orderBy: createdAt_DESC
          first:3
          ){ 
          title
          slug
          id
          createdAt
        }
      }   
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.posts;
  };

  export const getHighlightsPosts = async () => {
    const query = gql`
      query GetFeaturedPost() {
            posts(
              orderBy: createdAt_DESC
              first: 6
            ){
                author {
                  name
                  id
                  photo {
                    url
                  }
                }
                createdAt
                slug
                id
                sponsored
                title
                excerpt 
                featuredImage {
                  url
                }
                categories {
                  name
                  slug
                  color {
                    hex
                  }
                }
              }
      }   
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.posts;
  };

  export const getCategories = async () => {
    const query = gql`
      query GetCategories {
        categories(
          first: 5  
        ) {
          name
          slug
          photo{
            url
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.categories;
  };

  export const getRecentPosts = async () => {
    
    const query = gql`
    query GetPostDetais() {
      posts(
        orderBy: createdAt_DESC
        first: 4
        ){
          title
          id
          featuredImage{
            url
          }
          createdAt
          slug
        }
      }
      `;
    const result = await request(graphqlAPI, query);
  
    return result.posts;
  };