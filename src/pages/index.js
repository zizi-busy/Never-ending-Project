import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Applications from '../components/Applications';
import Info from '../components/Info';
import ContactSection from '../components/Contact'
import ContactForm from '../components/ContactForm';





export default ({ data }) => {
  const { 
    allStrapiProjects: { nodes: projects }, 
    allStrapiApps: { nodes: apps },
  } = data;

	return (
		<Layout>
			<Hero />
			<Info className="info-bg" img={data.infoImage.childImageSharp.fluid} />

			<Services className="one services-bg" img={data.serviceImage.childImageSharp.fluid} />

			<Projects 
      projects={projects} 	
      pretitle="What I love" 
      className= "title-center" 
      title="Featured projects"
      subtitle="Lipsum provides a detailed explanation of what lorem ipsum is, where it comes from" 
      showLink  />

      <Applications
        apps={apps} 	
      pretitle="Small Applications" 
      className= "title-left" 
      title="Featured applications"
      subtitle="Lipsum provides a detailed explanation of what lorem ipsum is, where it comes from" 
      showLink 
      />
      <ContactSection 
      className= "title-center" 
      title="Featured applications"
      subtitle="Lipsum provides a detailed explanation of what lorem ipsum" 
      

      />
  
		</Layout>
	);
};
// ...GatsbyImageSharpFluid
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

    allStrapiApps(filter: { featured: { eq: true } }) {
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