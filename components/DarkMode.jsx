import React from "react";
import styles from '../styles/DarkMode.module.css'
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSelector, useDispatch } from 'react-redux'
import {Dark_mode, Light_mode, selectMode} from '../features/darkModeReducer'

const DarkMode = () => {

    const darkMode =  useSelector(selectMode);
    const dispatch = useDispatch()

  return (
    <div className={styles.toggle_theme_div} >
      {darkMode === true ? (
        <DarkModeIcon
          id={styles.theme_change_button}
          sx={{ color: "white", fontSize: 32 }}
          fontSize="large"
          className={styles.dark_mode_icon}
          onClick={() => dispatch(Light_mode(), document.body.style.backgroundColor='white')}
        />
      ) : (
        <Brightness7Icon
          id={styles.theme_change_button}
          sx={{ color: "white", fontSize: 32 }}
          fontSize="large"
          className={styles.light_mode_icon}
          onClick={() => dispatch(Dark_mode(), document.body.style.backgroundColor='#191a1f')
        }
        />
      )}
      {/* <p></p> */}
    </div>
  );
};

export default DarkMode;
