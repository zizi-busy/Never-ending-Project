import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';
// ...GatsbyImageSharpFluid


const query = graphql`
	{
		file(relativePath: { eq: "hero-img4.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const Hero = () => {
	const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);

	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						{/*  <div className="underline"></div> */}
						<h4 className="pre-title"> Hi there,</h4>
						<h1 className="main-title">
							I'm <br />Zrinka
						</h1>
						<div className="after-title">Full-stack Web Developer</div>
						<div className="hero-btns">
							<Link to="/contact" className="btn">
								Say hello
							</Link>
							<Link to="/about" className="btn-text">
								About me &#8594;
							</Link>
						</div>
					</div>
				</article>
				<Image fluid={fluid} className="hero-img" />
			</div>
		</header>
	);
};

export default Hero;
