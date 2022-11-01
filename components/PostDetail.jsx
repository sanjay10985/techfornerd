import React from "react";
import moment from "moment/moment";
import styles from '../styles/PostDetail.module.css'
import { RichText } from "@graphcms/rich-text-react-renderer";
import CategoryColorLabel from "../components/CategoryColorLabel";
import Image from "next/image";

const PostDetail = ({post}) => {
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
          {/* {post.content.raw.children[0].children[0].text} */}
          <RichText
            content={post.content.raw.children}
            renderers={{
              h1: ({ children }) => <h1>{children}</h1>,
              blockquote: ({ children }) => (
                <blockquote
                  style={{
                    paddingLeft: "16px",
                    borderLeft: "4px solid blue",
                    fontSize: "26px",
                  }}
                >
                  {children}
                </blockquote>
              ),
              a: ({ children, href, openInNewTab }) => (
                <a
                  href={href}
                  target={openInNewTab ? "_blank" : "_self"}
                  rel="noreferrer"
                  className={styles.link}
                >
                  {children}
                </a>
              ),
              h2: ({ children }) => (
                <h2 className={styles.headingTwo}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className={styles.headingThree}>{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className={styles.headingFour}>{children}</h4>
              ),
              p: ({ children }) => (
                <p className={styles.paragraph}>{children}</p>
              ),
              bold: ({ children }) => (
                <strong className={styles.boldText}>{children}</strong>
              ),
              code_block: ({ children }) => {
                return (
                  <pre className="line-numbers language-none">
                    <code>{children}</code>
                  </pre>
                );
              },
              img: ({ src, width, height }) => (
                <>
                  <img src={src} className={styles.img} width="100%" />
                </>
              ),
              Asset: {
                application: () => (
                  <div>
                    <p>Asset</p>
                  </div>
                ),
                text: () => (
                  <div>
                    <p>text plain</p>
                  </div>
                ),
              },
            }}
          />
        </div>
        <div>{/* {category} */}</div>
      </div>
    </main>
  );
};

export default PostDetail;
