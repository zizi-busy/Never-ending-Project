import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SectionTitle from "../components/SectionTitle"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import { Link } from 'gatsby';
// ...GatsbyImageSharpFluid
 {/*    <SectionTitle className="title-center" title= {title} /> */}
 const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { info, stack, title, image } = nodes[0]

  return (
    <Layout>
      <SEO title="About Me" description="about zrinka" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
          <SectionTitle pretitle="Call me Zizi"className="title-left" title= {title} />
            <div className=" text-about">{info}</div>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            <div className="about-btn">
            </div> <Link to="/contact" className=" btn">
								Say hello
							</Link>
              </div>
          </article>
         
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About