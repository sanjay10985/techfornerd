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

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
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
      query GetHighlightsPost() {
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
                  photo {
                    url
                  }
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
      categories(first: 5) {
        name
        slug
        id
        photo {
          url
        }
        color {
          hex
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

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        orderBy: createdAt_DESC
        first: 4
      ) {
        id
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { categories, slug });

  return result.posts;
};

export const getPostsPerCategory = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      posts(where: { categories_some: { slug: $slug } }, first: 5) {
        id
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.posts;
};
