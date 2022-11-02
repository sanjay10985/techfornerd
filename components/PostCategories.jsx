import React, { useEffect } from 'react'
import { useState } from 'react'
import { getPostsPerCategory } from '../services'
import styles from '../styles/postCategories.module.css'
import { selectMode } from '../features/darkModeReducer'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const PostCategories = ({category, slug}) => {

    const [count, setCount] = useState(0);
    const mode = useSelector(selectMode)

    useEffect(() => {

        getPostsPerCategory(slug).then((result) => setCount(result.length));
    },[slug])

  return (
    <Link href={`/category/${category.slug}`}>
    <a  className={styles.categoryDiv} style={{backgroundColor: category.color.hex.concat('17'),filter: mode ? 'brightness(110%)' : 'brightness(130%)'}}>
      <h6 style={{color: category.color.hex.concat('FF'), filter: mode ? 'brightness(150%)' : 'brightness(100%)'}}>{category.name}</h6>
      {/* <span>{category.name}</span> */}
      <label style={{backgroundColor: category.color.hex}}>{count <= 10 ? `0${count}` : count}</label>
    </a>
    </Link>
  )
}

export default PostCategories

