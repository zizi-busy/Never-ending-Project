import React from "react"
import SectionTitle from "./SectionTitle"
import Application from "./Application"
import { Link } from "gatsby"


const Applications = ({ apps, pretitle, className, title, subtitle,  showLink }) => {
  return (
    <section className="section bg-grey" >
   
      <SectionTitle title={title} pretitle={pretitle} className={className} subtitle = {subtitle}/>
      <div className="section-center apps-center">
        {apps.map(app => {
          return <Application key={app.id} {...app} />
        })}
      </div>
      
      {showLink && (
        <Link to="/applications" className="btn center-btn">
         All Apps
        </Link>
      )}
    </section>
  )
}

export default Applications
