import React from 'react'
import Link from 'gatsby-link'
import fogStyles from './fog.module.css'
import styles from '../components/index.module.css'
import arrow from "../assets/arrowdown.png"

const Fog = () => (
    <section className={fogStyles.fog}>
        <h1 className={fogStyles.fogHead}>What makes a good user experience?</h1>
        <div className={fogStyles.fog_container}>
            <div className={ fogStyles.fog_cover1 }></div>
            <div className={ fogStyles.fog_cover2 }></div>
            <div className={ fogStyles.fog_cover3 }></div>
        </div>
        <Link style={{ position: 'fixed', width:'5vw'}} to="/page3/">
            <img  unselectable="on" className={fogStyles.arrow} alt="arrow" src={arrow}></img>
        </Link>
    </section>
)
export default Fog;