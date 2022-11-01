import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import styles from "../styles/Categories.module.css";

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  },[])

  // const animate_link = (e) => {
  //   const aniText = e.target.nextElementSibling.firstElementChild;
  //   aniText.classList.toggle("animateText");
  // };
  const animate_img = (e) => {
    const aniImage =
      e.target.parentElement.previousElementSibling.firstElementChild;
    aniImage.classList.toggle("animateImg");
  };

  return (
    <div className={styles.categorieBox}>
      {categories.map((category) => (
      <Link href={`category/${category.slug}`} key={category.id} className={styles.categoriesDiv}>
        <div className={styles.categoriesDiv}>
          <div
            className={styles.categoryImg}
            // onMouseEnter={animate_link}
            // onMouseLeave={animate_link}
          >
            <Image
              src={category.photo.url}
              layout="fill"
              objectFit="cover"
              alt="Category-img"
            />
          </div>
          <span
            className={styles.categoryName}
            onMouseEnter={animate_img}
            onMouseLeave={animate_img}
          >
            {" "}
            <a href={`category/${category.slug}`}>{category.name}</a>
          </span>
        </div>
      </Link>
      ))}
    </div>
  );
};

export default Categories;
