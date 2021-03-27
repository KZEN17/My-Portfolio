import React from 'react';

function MenuItems({ menuItem }) {
	return (
		<div className="portfolis">
			{menuItem.map((item) => {
				return (
					<div className="portfolio" key={item.id}>
						<div className="image-data">
							<img src={item.image} alt="" />
							<ul className="hover-items">
								<li>
									<a href={item.link1} target="blank">
										{item.icon1}
									</a>
									<a href={item.link2} target="blank">
										{item.icon2}
									</a>
								</li>
							</ul>
						</div>
						<h5>{item.title}</h5>
						<p>{item.description}</p>
					</div>
				);
			})}
		</div>
	);
}

export default MenuItems;
