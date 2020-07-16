import React from "react"


const SectionTitle = ({
  className,
  pretitle, 
  title, 
  subtitle 
}) => {
  return (
    <div className={className}>

	    <h4 className="pre-title">{pretitle}</h4>
      <h2 className="text-large">{title}</h2>
        <p className="text-medium">{subtitle}</p>
  
     </div>
  )
}



export default SectionTitle
