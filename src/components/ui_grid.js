import styles from '../components/index.module.css'
import arrow from "../assets/arrowdown.png"
import arrowlite from "../assets/arrowdownlite.png"
import Img from "gatsby-image"
import React from "react"


class GridUI extends React.Component {

    constructor(){
        super()
        this.state = {
            ui_active: false,
        }
        this.scrollTop = this.scrollTop.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
    }

    scrollLeft() {
        console.log(window.innerWidth)
        window.scrollBy({
            top: 0,
            left: -window.innerWidth,
            behavior: 'smooth' 
        })
        console.log("left!")
    }

    scrollRight() {
        console.log(window.innerWidth)
        window.scrollBy({
            top: 0,
            left: window.innerWidth,
            behavior: "smooth"      
        })
        console.log("left!")
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            left: window.innerWidth,
            behavior: 'smooth'
        });
    }
    
    render() {
        const data = this.props.data;
        let active = this.props.active;
        let style = this.props.style;
        return (
            <div className={style}>
                    <div className={active ? styles.ui_active : styles.ui_inactive}>
                        <div></div>
                        <div className={styles.ui_element + " " + styles.ui_element_up}
                            onClick= {() => {this.scrollTop()}}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} 
                                >
                                <img className={styles.arrow_up} 
                                    alt="arrow" 
                                    src={arrowlite}/>
                                <h1>Easy backtracking?</h1>
                            </div>
                        </div>
                        <div></div>
                        <div className={styles.ui_element + " " + styles.ui_element_left}
                            onClick= {() => {this.scrollLeft()}}
                        >
                        <div style={{
                                width: '5vw',
                                height: '7.5vh',
                                zIndex: '100',
                            }} 
                            >
                                <img className={styles.arrow_left} alt="arrow" 
                                    src={arrowlite}/>
                            </div>
                            <h1>An intuitive layout?</h1>
                        </div>
                        <div className={styles.ui_element + " " + styles.ui_element_main}>
                            <h1>What makes a good UX?</h1>
                        </div>
                        <div className={styles.ui_element + " " + styles.ui_element_right}
                            onClick= {() => {this.scrollRight()}}>
                            <h1>Fancy animations?</h1>
                            <div style={{
                                width: '5vw',
                                height: '7.5vh',
                                zIndex: '100',
                            }} 
                            >
                                <img className={styles.arrow_right} alt="arrow" 
                                    src={arrowlite}/>
                            </div>
                        </div>
                        <div></div>
                        <div className={styles.ui_element + " " + styles.ui_element_down}>
                            <h1>Something else?</h1>
                            <div style={{
                                width: '5vw',
                                height: '7.5vh',
                                zIndex: '100',
                            }} 
                                onClick= {() => {}}>
                                <img className={styles.arrow_down} alt="arrow" 
                                    src={arrowlite}/>
                            </div>
                        </div>

                        <div></div>
                    </div>
                    <Img className={styles.jungle_img} fluid={data.jungle.childImageSharp.fluid}/>
                </div>
        )

    }
}

export default GridUI;