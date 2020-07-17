import React from 'react';
import BackgroundImage from 'gatsby-background-image';

const Info = ({ img, className, children }) => {
	return (
		<BackgroundImage className={className} fluid={img}>
			<div className=" section section-center ">
				<div className="row">
					<div className="col">
						<h4 className="pre-title">About me</h4>

						<h2 className="text-large">A junior web developer focusing on front-end interactive experiences</h2>
					</div>
					<div className="col">
						<h4 className="pre-title">What I do best</h4>
						<p className="text-medium">
							Hungry, ambitious, and loves to give back by openly sharing her learning process. Currently, Junior Web-developer at Integrify where  she envisions and conceptualizes digital products for
							clients.
						</p>
					</div>
				</div>
			</div>
		
		</BackgroundImage>
	);
};

export default Info;
