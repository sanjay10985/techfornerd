import React from "react";
import styles from "../../styles/PostDetails.module.css";
import Image from "next/image";
import PostDetail from "../../components/PostDetail";
import { getPostDetails, getPosts } from "../../services";
import CategoryColorLabel from "../../components/CategoryColorLabel";
import moment from "moment/moment";
import { RichText } from "@graphcms/rich-text-react-renderer";

const PostDetails = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className={styles.headingThree}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className={styles.paragraph}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className={styles.headingFour}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "heading-two":
        return (
          <h2 key={index} className={styles.headingTwo}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            // height={obj.height}
            // width={obj.width}
            width="100%"
            className={styles.img}
            // height="100%"
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  console.log(post);

  return (
    <main className={styles.postDetailsBox}>
      <div className={styles.featuredImageBox}>
        <div
          className={styles.featuredImageDiv}
          style={{ backgroundImage: `url(${post.featuredImage.url})` }}
        >
          <div className={styles.postDetails}>
            <CategoryColorLabel category={post.categories[0]} />
            <h2>{post.title}</h2>
            <div className={styles.postMoreDetails}>
              <div className={styles.hlAuthorBox}>
                <a href="/" className={styles.hlAuthorDiv}>
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
                    <a href="">
                      {" "}
                      {post.author.name.charAt(0).toUpperCase() +
                        post.author.name.slice(1)}
                    </a>
                  </label>
                </a>
              </div>
              <label></label>
              <span>{moment(post.createdAt).format("DD MMM, YYYY")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.postContentBox}>
         <div className={styles.postContentDiv}>
        {/*  {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}*/}
        
        <RichText
        content={post.content.raw.children}
        renderers={{
          h1: ({ children }) => <h1 >{children}</h1>,
          blockquote: ({ children }) => (
            <blockquote
              style={{
                paddingLeft: '16px',
                borderLeft: '4px solid blue',
                fontSize: '26px',
              }}
            >
              {children}
            </blockquote>
          ),
          a: ({ children, href, openInNewTab }) => (
            <a
              href={href}
              target={openInNewTab ? '_blank' : '_self'}
              style={{ color: 'green' }}
              rel="noreferrer"
            >
              {/* {console.log()} */}
              {children.props.content[0].text}
              {/* {children} */}
            </a>
          ),
          h2: ({ children }) => (
            <h2 style={{ color: 'darkcyan' }} className={styles.headingTwo}>{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 style={{ color: 'darkcyan' }} className={styles.headingThree}>{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 style={{ color: 'darkcyan' }} className={styles.headingFour}>{children}</h4>
          ),
          p: ({ children }) => (
            <p className={styles.paragraph}>{children}</p>
          ),
          bold: ({ children }) => <strong>{children}</strong>,
          code_block: ({ children }) => {
            return (
              <pre className="line-numbers language-none">
                <code>{children}</code>
              </pre>
            );
          },
          img: ({src,width,height}) => (<>
            <img src={src}
              width="100%"
            />
            {/* // {console.log(object)} */}
            {/* {console.log()} */}
            </>
          ),
          // Asset: {
          //   application: () => (
          //     <div>
          //       <p>Asset</p>
          //     </div>
          //   ),
          //   text: () => (
          //     <div>
          //       <p>text plain</p>
          //     </div>
          //   ),
          // },
        }}
      /></div> 
        <div>{/* {category} */}</div>
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
