import React from "react";
import styles from "../styles/PostContent.module.css";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { selectMode } from "../features/darkModeReducer";
import { useSelector } from "react-redux";

const PostContent = ({ post }) => {
  const mode = useSelector(selectMode);
  return (
    <div className={styles.postContent}>
      <RichText
        content={post}
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
              style={{ color: mode ? "#a1a1a8" : "#595d69" }}
            >
              {children}
            </a>
          ),
          h2: ({ children }) => (
            <h2
              className={styles.headingTwo}
              style={{ color: mode ? "white" : "black" }}
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              className={styles.headingThree}
              style={{ color: mode ? "white" : "black" }}
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4
              className={styles.headingFour}
              style={{ color: mode ? "white" : "black" }}
            >
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p
              className={styles.paragraph}
              style={{ color: mode ? "#a1a1a8" : "#595d69" }}
            >
              {children}
            </p>
          ),
          bold: ({ children }) => (
            <strong
              className={styles.boldText}
              style={{ color: mode ? "#a1a1a8" : "#595d69" }}
            >
              {children}
            </strong>
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
              <img src={src} className={styles.img} alt="img" width="100%" />
            </>
          ),
          video: ({ src, width, height }) => (
            <>
              <img src={src} className={styles.img} alt="img" width="100%" />
              {console.log(src)}
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
  );
};

export default PostContent;
