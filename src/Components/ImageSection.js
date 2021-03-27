import React from 'react';
import codin from '../img/coding.jpg';

function ImageSection() {
	return (
		<div className="ImageSection">
			<div className="img">
				<img src={codin} alt="" />
			</div>
			<div className="about-info">
				<h4>
					I am<span> Zlatko Nikoloski</span>
				</h4>
				<p className="about-text">
					I am a web and mobile app developer based in the Philippines,
					specializing in building (and occasionally designing), exceptional,
					high-quality websites, web apps and mobile apps. After graduating from
					Colt Steele's Web Developer Bootcamp i started working as a freelancer
					on Fiverr, Upwork and Freelancer where I worked on a variety of
					interesting and meaningfull projects on daily basis.
				</p>
				<div className="about-details">
					<div className="left-section">
						<p>Full Name</p>
						<p>Age</p>
						<p>Nationality</p>
						<p>Languages</p>
						<p>Address</p>
					</div>
					<div className="right-section">
						<p>: Zlatko Nikoloski</p>
						<p>: 37</p>
						<p>: Macedonian</p>
						<p>: English</p>
						<p>: Brgy. Calayo, Nasugbu, Batangas, Philippines</p>
					</div>
				</div>
				{/* <button className="btn"> */}
				<div className="download">
					<a
						href="https://drive.google.com/file/d/1B6KKrKzTnqHMf-FslpgvPDmHjEksmoxN/view?usp=sharing"
						target="blank"
					>
						Download Cv
					</a>
				</div>
				{/* </button> */}
			</div>
		</div>
	);
}

export default ImageSection;
