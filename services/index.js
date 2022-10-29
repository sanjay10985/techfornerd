import { request, gql } from "graphql-request";

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
        posts(where: {featuredPost: true}) { 
          title
          slug
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
        orderBy: createdAt_ASC
        last: 4
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