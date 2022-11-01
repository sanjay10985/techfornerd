import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Categories.module.css";

const Categories = ({ title, slug, photoUrl }) => {

    const animate_link = (e) =>{
       const aniText= e.target.nextElementSibling.firstElementChild;
       aniText.classList.toggle("animateText");
    }
    const animate_img = (e) =>{
    //    const aniText= e.target.nextElementSibling.firstElementChild;
    //    aniText.classList.toggle("animateText");
    const aniImage = e.target.parentElement.previousElementSibling.firstElementChild
    ;
    aniImage.classList.toggle("animateImg");
    // console.log(aniImage);
    // console.log(e)
    }

  return (
    <Link href={`category/${slug}`} className={styles.categoriesDiv}
        
    >
        <div className={styles.categoriesDiv}>
      <div className={styles.categoryImg}
      onMouseEnter={animate_link}
      onMouseLeave={animate_link}>
        <Image src={photoUrl} layout="fill" objectFit="cover" alt="Category-img"/>
      </div>
      <span  className={styles.categoryName}
        onMouseEnter={animate_img}
        onMouseLeave={animate_img}
      > <a href={`category/${slug}`}>{title}</a></span>
      </div>
    </Link>
  );
};

export default Categories;
