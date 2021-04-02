import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import Particles from 'react-particles-js';
function HomePage() {
	const pageTransition = {
		type: 'tween',
		ease: 'linear',
		duration: 2,
	};
	const pageVariants = {
		in: {
			opacity: 1,
		},
		out: {
			opacity: 0,
		},
	};
	return (
		<motion.div
			initial="out"
			exit="out"
			animate="in"
			className="HomePage"
			transition={pageTransition}
			variants={pageVariants}
		>
			<header className="hero">
				<div className="particles">
					{' '}
					<Particles
						params={{
							particles: {
								number: {
									value: 40,
								},
								color: '#fff',
								line_linked: {
									color: '#037fff',
								},
							},
							retina_detect: 'true',
						}}
					/>
				</div>
				<div>
					<h1 className="hero-text">
						Hi, I am
						<span> Zlatko </span>
					</h1>
					<p className="h-sub-text">
						I am a web and mobile app developer based in the Philippines,
						specializing in building (and occasionally designing), exceptional,
						high-quality websites, web apps and mobile apps. After graduating
						from Colt Steele's Web Developer Bootcamp i started working as a
						freelancer on Fiverr, Upwork and Freelancer where I worked on a
						variety of interesting and meaningfull projects on daily basis.
					</p>
					<div className="icons">
						<a
							href="https://www.twitter.com/Zlatko1412"
							className="icon-holder"
						>
							<FontAwesomeIcon icon={faTwitter} className="icon yt" />
						</a>
						<a href="https://github.com/KZEN17" className="icon-holder">
							<FontAwesomeIcon icon={faGithub} className="icon gh" />
						</a>
						<a
							href="https://www.facebook.com/zlatko.nikoloski1"
							className="icon-holder"
						>
							<FontAwesomeIcon icon={faFacebook} className="icon fb" />
						</a>
						<a
							href="https://www.linkedin.com/in/zlatko-nikoloski-33596461"
							className="icon-holder"
						>
							<FontAwesomeIcon icon={faLinkedin} className="icon li" />
						</a>
					</div>
				</div>
				<div className="icons">
					<button>
						<a
							href="https://drive.google.com/file/d/1B6KKrKzTnqHMf-FslpgvPDmHjEksmoxN/view?usp=sharing"
							target="blank"
						>
							Download CV
						</a>
					</button>
				</div>
			</header>
		</motion.div>
	);
}

export default HomePage;
