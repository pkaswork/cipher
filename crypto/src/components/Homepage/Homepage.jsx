import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Homepage() {
	return (
		<>
			<div className="wrapper">
			<div className="content">
				<Header 
					isLogin={false}
				/>
				<main className="main">
					<section className="about">
						<div className="container">
							О приложении
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</div>
		</>
	);
}

export default Homepage;