import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Info from '../components/Info';


export const query = graphql`
	query {
		infoImage: file(relativePath: { eq: "bg-1.png" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		serviceImage: file(relativePath: { eq: "bg-4.png" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
    }

    allStrapiProjects(filter: { featured: { eq: true } }) {
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
`;

export default ({ data }) => {
  const { allStrapiProjects: { nodes: projects } } = data;

	return (
		<Layout>
			<Hero />
			<Info className="info-bg" img={data.infoImage.childImageSharp.fluid} />

			<Services className="one services-bg" img={data.serviceImage.childImageSharp.fluid} />

			<Projects 
      projects={projects} 	
      pretitle="What I love" 
      className= "projects-title" 
      title="Featured projects"
      subtitle="Lipsum provides a detailed explanation of what lorem ipsum is, where it comes from" 
      showLink  />
		</Layout>
	);
};
// ...GatsbyImageSharpFluid
