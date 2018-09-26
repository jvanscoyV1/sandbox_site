import React from "react"
import styles from '../components/index.module.css'
import { Link } from "gatsby"
import arrow from "../assets/arrowdownlite.png"
import Jungle from "../components/jungle"
import fogStyles from "../components/fog.module.css"
export default () => 
    <div>
        <div className={styles.main}>
            <Jungle></Jungle>
            <Link style={{ zIndex:'100', position: 'fixed', height: '10vh', width:'5vw'}} to="/page3/">
                <img className={fogStyles.arrow} alt="arrow" src={arrow}></img>
            </Link>  
        </div>
    </div>

