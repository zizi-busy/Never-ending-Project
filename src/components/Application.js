import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Application = ({ description, title, github, stack, url, image, index, id }) => {
    return (
      <a href={url} className="app" key={id}>
       <article>
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="app-img"  />
        )}
        <div className="app-card">
          <h4 className="pre-title projects-pre-title" >{title || "default title"}</h4>
      
          <p className="project-desc">{description}</p>
          <div className="project-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
          <div className="project-links">
            <a href={github}>
              <FaGithubSquare className="project-icon" />
            </a>
            <a href={url}>
              <FaShareSquare className="project-icon" />
            </a>
          </div>
        </div>
        </article>
      </a>
    )
  }
  
Application.propTypes = {
    title: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  
  export default Application
  
