import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Apps from "../components/Applications"
import SEO from "../components/SEO"

const ApplicationsPage = ({
  data: {
    allStrapiApps: { nodes: apps },
  },
}) => {
  return (
    <Layout>
      <SEO title="Applications" />
      <section className="apps-page">
        <Apps apps={apps} pretitle ="My applications"
         className="title-center" title="All applications" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiApps {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ApplicationsPage