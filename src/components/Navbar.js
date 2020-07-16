import React from 'react';
import logo from '../assets/ZI-black.png';
import { BsList } from 'react-icons/bs';
import PageLinks from '../constants/links';
import { Link } from 'gatsby';
/* import SocialLinks from '../constants/socialLinks'; */

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					{/* <img className="logo" src={logo} alt="logo" /> */}
					<Link to="/" class="FB">
						<h3 class="logotype">ZIZI <span>.</span></h3>
					</Link>
					<button type="button" className="toggle-btn">
						<BsList />
					</button>
				</div>

				<PageLinks styleClass="nav-links" />
			</div>
		</nav>
	);
};

export default Navbar;
