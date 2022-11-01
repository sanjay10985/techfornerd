import React from 'react'
import styles from '../styles/AlternateSize.module.css'
import { selectMode } from '../features/darkModeReducer'
import { useSelector } from 'react-redux'

const AlternateSize = () => {
    const mode = useSelector(selectMode);
  return (
      <div
          id={styles.togglediv}
          style={{ color: mode ? "white" : "#2163e8" }}
        >
          <input className={styles.input} type="radio" name="tx" id="sm_tx" />
          <label
            id={styles.label}
            className="lableback"
            htmlFor="sm_tx"
            onClick={(e) => (document.body.style.fontSize = "87%")}
          >
            A-
          </label>
          <input
            className={styles.input}
            type="radio"
            name="tx"
            id="default"
            defaultChecked
          />
          <label
            id={styles.label}
            className="lableback"
            htmlFor="default"
            onClick={(e) => (document.body.style.fontSize = "100%")}
          >
            A
          </label>
          <input className={styles.input} type="radio" name="tx" id="lg_tx" />
          <label
            id={styles.label}
            className="lableback"
            htmlFor="lg_tx"
            onClick={(e) => (document.body.style.fontSize = "113%")}
          >
            A+
          </label>
        </div>
  )
}

export default AlternateSize
