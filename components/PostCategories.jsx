import React, { useEffect } from 'react'
import { useState } from 'react'
import { getPostsPerCategory } from '../services'
import styles from '../styles/postCategories.module.css'

const PostCategories = ({category, slug}) => {

    const [count, setCount] = useState(0)

    useEffect(() => {

        getPostsPerCategory(slug).then((result) => setCount(result.length));
    },[slug])

  return (
    <a href={`/category/${category.slug}`} className={styles.categoryDiv} style={{backgroundColor: category.color.hex.concat('17')}}>
      <h6 style={{color: category.color.hex.concat('FF')}}>{category.name}</h6>
      {/* <span>{category.name}</span> */}
      <label style={{backgroundColor: category.color.hex}}>{count <= 10 ? `0${count}` : count}</label>
    </a>
  )
}

export default PostCategories

