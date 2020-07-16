import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Info from "../components/Info"


export const query = graphql`
  query {
    infoImage: file(relativePath: { eq: "bg-1.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
    `

export default ({ data }) => {
  return <Layout>
  <Hero/>
<Info  className="info-background"
 img={data.infoImage.childImageSharp.fluid} />
 <Services/>
</Layout>
  
}
// ...GatsbyImageSharpFluid
