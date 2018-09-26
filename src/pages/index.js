import React from "react"
import styles from '../components/main.module.css'
import arrow from "../assets/arrowdown.png"
import { graphql } from 'gatsby'
import Jungle from "../components/jungle"
import jungleStyles from "../components/jungle.module.css"
import Img from "gatsby-image"

class Index extends React.Component {
    constructor(){
        super()
        this.state = {
            jungleOpacity: '0.0'
        }
    }

    render(){
        const data = this.props.data;
        return (
            <div className={styles.main}>
                <div className={styles.item_container}>
                    <h1 className={styles.welcome}>Welcome</h1>
                    <h2 className={styles.name}>My name is Jake.</h2>
                    <h2 className={styles.im}>This is my website.</h2>
                </div>
                <div style={{position:'sticky', top:'0vh'}} className={styles.item_container}>
                    <div className={jungleStyles.jungle}>
                        <Img className={jungleStyles.jungle_img} fluid={data.jungle.childImageSharp.fluid}/>
                    </div>
                </div>
                <div className={styles.message_container}>
                    <div className={styles.dialog + " " + styles.dialog_left}>
                        <h1>What makes a good user experience?</h1>
                    </div>
                    <div className={styles.dialog + " " + styles.dialog_right}>
                        <h1>I don't know, intuitive navigation?</h1>
                    </div>
                    <div className={styles.dialog + " " + styles.dialog_right}>
                        <h1>A cohesive layout?</h1>
                    </div>
                    <div className={styles.dialog + " " + styles.dialog_right}>
                        <h1>Appealing color schemes?</h1>
                    </div>
                    <div className={styles.dialog + " " + styles.dialog_left}>
                        <h1>Maybe...</h1>
                    </div>
                    <div className={styles.dialog + " " + styles.dialog_left + " " + styles.animated}>
                        <h1 >What about <span className={styles.animated}>fancy animations?</span></h1>
                    </div>
                    <div className={styles.dialog + " " + styles.dialog_right}>
                        <h1>Please stop that.</h1>
                    </div>
                    <div className={styles.dialog + " " + styles.dialog_right}>
                        <h1>Animations are neat, but relying on them is bad.</h1>
                    </div>
                    <div className={styles.dialog + " " + styles.dialog_right}>
                        <h1>Mobile browsers struggle with most css transitions.</h1>
                    </div>
                    <div className={styles.dialog + " " + styles.dialog_left + " " + styles.animated_fly}>
                        <h1>YOU CAN'T STOP ME</h1>
                    </div>
                    <div className={styles.dialog + " " + styles.dialog_right}>
                        <h1>...</h1>
                    </div>
                </div>
                <div className={styles.item_container}></div>
            </div>
        )
    }
}


export const query = graphql`
    query {
        jungle: file(relativePath: { eq: "jungle1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        jungle2: file(relativePath: { eq: "jungle2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
  }`

export default Index

