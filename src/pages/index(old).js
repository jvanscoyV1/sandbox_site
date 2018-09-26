import React from "react"
import styles from '../components/index.module.css'
import arrow from "../assets/arrowdown.png"
import { graphql } from 'gatsby'
import GridUI from "../components/ui_grid";


class Index extends React.Component {
    constructor(){
        super()
        this.state = {
            ui_active: false,
        }
        this.scrollJungle = this.scrollJungle.bind(this);
        this.scrollTop = this.scrollTop.bind(this);
    }


    scrollJungle() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
        this.setState( {
            ui_active: true
        });
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            left: window.innerWidth,
            behavior: 'smooth'
        });
        this.setState( {
            ui_active: false
        });
    }
    
    render(){
        const data = this.props.data;
        return (
            <div onLoad={() => this.scrollTop()} className={styles.main}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <div className={styles.welcome_container}>
                    <h1  className={styles.welcome}>Welcome</h1>
                    <h2 className={styles.name}>My name is Jake.</h2>
                    <h2 className={styles.im}>This is my website.</h2>
                    <div style={{
                        width: '5vw',
                        height: '7.5vh',
                    }} onClick= {() => {this.scrollJungle()}}>
                        <img className={styles.arrow} 
                            alt="arrow" 
                            src={arrow}/>
                    </div>
                </div>
                <GridUI
                    data={data} 
                    active={this.state.ui_active}
                    style={styles.jungle}>
                </GridUI>
                <GridUI
                    data={data} 
                    active={this.state.ui_active}
                    style={styles.jungle_left}>
                </GridUI>
            </div>
        )
    }
}


export const query = graphql`
    query PageQuery{
    jungle: file(relativePath: { eq: "jungle1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }`

export default Index

// () => 
//     <div>
//         <div className={styles.main}>
//             <h1 className={styles.welcome}>Welcome</h1>
//             <h2 className={styles.name}>My name is Jake.</h2>
//             <h2 className={styles.im}>This is my website.</h2>
//             <a style={{
//                 width: '5vw',
//                 height: '7.5vh',
//             }} onClick= {scrollJungle}>
//                 <img className={styles.arrow} 
//                     alt="arrow" 
//                     src={arrow}/>
//             </a>
//             {/* <Link style={{ position: 'fixed', width: '5vw'}} to="/page2/">
//             </Link> */}
//             <Jungle></Jungle>
//         </div>
//     </div>

