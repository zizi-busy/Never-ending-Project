import React from 'react';
import BackgroundImage from 'gatsby-background-image';

const Info = ({ img, className, children }) => {
	return (
		<BackgroundImage className={className} fluid={img}>
			<div className=" section section-center ">
				<div className="row">
					<div className="col">
						<h4 className="pre-title">About me</h4>

						<h2 className="text-large">A product designer focusing on mobile app interactive experiences</h2>
					</div>
					<div className="col">
						<h4 className="pre-title">What I do best</h4>
						<p className="text-medium">
							Hungry, ambitious, and loves to give back by openly sharing his process. Currently, Creative
							Director at DJVWB where Yoneth Asmara envisions and conceptualizes digital products for
							clients like Tinder, Boosted Boards, Lufthansa, and Flip.
						</p>
					</div>
				</div>
			</div>
			{children}
		</BackgroundImage>
	);
};

export default Info;
