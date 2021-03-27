import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
	return (
		<div className="AboutPage">
			<Tittle title={'About Me'} span={'About Me'} />
			<ImageSection />
			<Tittle title={'My Skills'} span={'My Skills'} />
			<div className="skillsContainer">
				<SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
				<SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
				<SkillsSection
					skill={'Node Js (Express)'}
					progress={'80%'}
					width={'80%'}
				/>
				<SkillsSection skill={'Flutter/Dart'} progress={'70%'} width={'70%'} />
				<SkillsSection skill={'Python'} progress={'70%'} width={'70%'} />
				<SkillsSection skill={'PHP/Laravel'} progress={'60%'} width={'60%'} />
				<SkillsSection skill={'SQL/NoSQL'} progress={'60%'} width={'60%'} />
				<SkillsSection skill={'Web Design'} progress={'25%'} width={'25%'} />
			</div>

			<Tittle title={'Services'} span={'Services'} />
			<div className="services-container">
				<ServicesSection
					image={intelligence}
					title={'Mobile App Development'}
					text={'Built with Flutter for faster development times.'}
				/>
				<ServicesSection
					image={design}
					title={'Web App Development'}
					text={'Full Stack development, mainly with MERN stack.'}
				/>
				<ServicesSection
					image={gamedev}
					title={'Games Development'}
					text={'Simple but addicitive games built with FlutterFlare'}
				/>
			</div>
		</div>
	);
}

export default AboutPage;
