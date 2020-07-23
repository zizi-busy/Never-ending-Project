import React from "react"
import SectionTitle from "./SectionTitle"
import Project from "./Project"
import { Link } from "gatsby"


const Projects = ({ projects, pretitle, className, title, subtitle,  showLink }) => {
  return (
    <section className="section" >
    <div className="projects">
      <SectionTitle title={title} pretitle={pretitle} className={className} subtitle = {subtitle}/>
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
         all projects
        </Link>
      )}
    </section>
  )
}

export default Projects
