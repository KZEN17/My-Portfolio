import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import portfolios from '../Components/allportfolios';
import { useState } from 'react';
import { motion } from 'framer-motion';
const allCategories = [
	'All',
	...new Set(portfolios.map((item) => item.category)),
];

function PortfoliosPage() {
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
	const [categories, setCategories] = useState(allCategories);
	const [menuItems, setMenuItems] = useState(portfolios);

	const filter = (category) => {
		if (category === 'All') {
			setMenuItems(portfolios);
			return;
		}
		const filteredData = portfolios.filter((item) => {
			return item.category === category;
		});
		setMenuItems(filteredData);
	};

	return (
		<motion.div
			className="PortfolioPage"
			initial="out"
			exit="out"
			animate="in"
			transition={pageTransition}
			variants={pageVariants}
		>
			<div className="title">
				<Tittle title={'Projects'} span={'Projects'} />
			</div>
			<div className="portfolios-data">
				<Categories filter={filter} categories={categories} />
				<MenuItems menuItem={menuItems} />
			</div>
		</motion.div>
	);
}

export default PortfoliosPage;
