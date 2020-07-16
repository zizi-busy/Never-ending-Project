import React from 'react';
import SectionTitle from './SectionTitle';
import services from '../constants/services';

const Services = () => {
	return (
		<div className=" section bg-grey ">
			<div className="section-center">
				<SectionTitle
					className="service-title"
					pretitle="What I love"
					title="My services"
					subtitle="Lipsum.com provides a detailed explanation of what lorem ipsum is, where it comes from"
				/>
        
        <div className="section-center services-center">
         
      
          {services.map(service=>{
            const {id, icon, title, text}= service
            return (
            <article key ={id} className="service">
              {icon}
              <h4 className="pre-title">{title}</h4>
              <p>{text}</p>
            </article>
            )
           } )}
           </div>
           </div>
           </div>
	);
};

export default Services;
