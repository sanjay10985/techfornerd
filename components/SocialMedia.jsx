import React from 'react'
import styles from '../styles/SocialMedia.module.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import Link from 'next/link';

const SocialMedia = () => {
  return (
    <div className={styles.socialMediaDiv}>
      <Link href="https://www.google.com"  id="socialAccDiv">
        <div className={styles.facebook}>
        <AiFillFacebook fontSize="22px"  color='white'/>
        <label>1.5K</label>
        <span>Fans</span>
        </div>
      </Link>
      <Link href="https://www.google.com"  id="socialAccDiv">
        <div className={styles.instagram}>
        <AiOutlineInstagram fontSize="22px" color='white'/>
        <label>1.8M</label>
        <span>Followers</span>
        </div>
      </Link>
      <Link href="https://www.google.com"  id="socialAccDiv">
      <div className={styles.youtube}>
        <FaYoutubeSquare fontSize="22px" color="white" style={{backgroundColor: '#ff0000'}}/>
        <label>22K</label>
        <span>Subs</span>
        </div>
      </Link>
    </div>
  )
}

export default SocialMedia
