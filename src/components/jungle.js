import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'
import jungleStyles from "../components/jungle.module.css"

const Jungle = ({}) => (
    <StaticQuery
    query={graphql`
    query JungleQuery{
        jungle: file(relativePath: { eq: "jungle1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className={jungleStyles.jungle}>
        <Img className={jungleStyles.jungle_img} fluid={data.jungle.childImageSharp.fluid}/>
      </div>
    )}
  />
)

export default Jungle;

