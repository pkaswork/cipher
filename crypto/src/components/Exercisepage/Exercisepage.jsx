import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Exercise from '../Exercise/Exercise';

function Exercisepage() {
	const location = useLocation();
	const { from } = location.state;
	const surname = from[0];
	const name = from[1];
	const patronymic = from[2];

	return (
	<>
	<div className="wrapper">
		<div className="content">
			<Header 
				isLogin={true} 
				surname={surname} 
				name={name} 
				patronymic={patronymic}
			/>
			<main className="main">
				<Exercise />
			</main>
		</div>
		<Footer />
	</div>
	</>
	);
}

export default Exercisepage;