import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useState, React } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function App() {
	const [navToggle, setNavToggle] = useState(false);

	const navClick = () => {
		setNavToggle(!navToggle);
	};

	return (
		<div className="App">
			<div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
				<NavBar />
			</div>
			<div className="nav-btn" onClick={navClick}>
				<div className="lines-1">
					<FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon>
				</div>
			</div>
			<div className="main-content">
				<div className="content">
					<AnimatePresence>
						<Switch>
							<Route path="/" exact>
								<HomePage />
							</Route>
							<Route path="/about" exact>
								<AboutPage />
							</Route>
							<Route path="/portfolios" exact>
								<PortfliosPage />
							</Route>
							<Route path="/blogs" exact>
								<BlogsPage />
							</Route>
							<Route path="/contact" exact>
								<ContactPage />
							</Route>
						</Switch>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

export default App;
