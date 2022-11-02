import React from 'react'
import styles from '../styles/CategoryColorLabel.module.css'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from 'next/link';


const CategoryColorLabel = ({category}) => {
  return (
    <div
          id={styles.categoryDiv}
          style={{
            backgroundColor: `${category.color.hex}`,
          }}
        >
          <FiberManualRecordIcon sx={{ color: "white", fontSize: 15 }} />
          <label id={styles.category}>
            {" "}
           <a href={category.slug}> {category.name} </a>
          </label>
        </div>
  )
}

export default CategoryColorLabel
