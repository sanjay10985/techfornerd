import React from 'react'
import styles from '../styles/SocialMedia.module.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className={styles.socialMediaDiv}>
      <div className={styles.facebook} id="socialAccDiv">
        <AiFillFacebook fontSize="22px"  color='white'/>
        <label>1.5K</label>
        <span>Fans</span>
      </div>
      <div className={styles.instagram} id="socialAccDiv">
        <AiOutlineInstagram fontSize="22px" color='white'/>
        <label>1.8M</label>
        <span>Followers</span>
      </div>
      <div className={styles.youtube} id="socialAccDiv">
        <FaYoutubeSquare fontSize="22px" color="white" style={{backgroundColor: '#ff0000'}}/>
        <label>22K</label>
        <span>Subs</span>
      </div>
    </div>
  )
}

export default SocialMedia
