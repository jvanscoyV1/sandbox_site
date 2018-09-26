import React from "react"
import Img from "gatsby-image"
import { StaticQuery, Link, graphql } from 'gatsby'
import fogStyles from "../components/fog.module.css"
import arrow from "../assets/arrowdown.png"

const Fog2 = ({data}) => (
    <StaticQuery
    query={graphql`
    query FogQuery{
        fog: file(relativePath: { eq: "fog.png" }) {
          childImageSharp {
            fixed(width: 1392, height: 785) {
                ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <div className={fogStyles.fog}>
        <h1 className={fogStyles.fogHead}>What makes a good user experience?</h1>
        <div className={fogStyles.fog_container}>
            <Img style= {{position: 'fixed'}} className={fogStyles.fog_img1} fixed={data.fog.childImageSharp.fixed}/>
            <Img style= {{position: 'fixed'}} className={fogStyles.fog_img2} fixed={data.fog.childImageSharp.fixed}/>
            <Img style= {{position: 'fixed'}} className={fogStyles.fog_img3} fixed={data.fog.childImageSharp.fixed}/>
        </div>
              
      </div>
    )}
  />
)

export default Fog2;

