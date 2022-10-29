import React from 'react'
import styles from '../styles/SocialMedia.module.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";

const SocialMedia = ({icon,type,followers}) => {
  return (
    <div className={styles.socialMediaDiv}>
      <div className={styles.facebook}>
        <AiFillFacebook fontSize="22px"  color='white'/>
        <h6>1.5K</h6>
        <span>Fans</span>
      </div>
      <div className={styles.instagram}>
        <AiOutlineInstagram fontSize="22px" color='white'/>
        <h6>1.8M</h6>
        <span>Followers</span>
      </div>
      <div className={styles.youtube}>
        <FaYoutubeSquare fontSize="22px" color="white" style={{backgroundColor: '#ff0000'}}/>
        <h6>22K</h6>
        <span>Subs</span>
      </div>
    </div>
  )
}

export default SocialMedia
