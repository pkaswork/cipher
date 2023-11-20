import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CipherCaesar from '../../exercises/CipherCaesar/CipherCaesar';
import СipherCaesarFrequency from '../../exercises/СipherCaesarFrequency/СipherCaesarFrequency';
import CipherCaesarStrip from '../../exercises/CipherCaesarStrip/CipherCaesarStrip';
import ReplacementCipher from '../../exercises/ReplacementCipher/ReplacementCipher';
import TrisemiusCipher from '../../exercises/TrisemiusCipher/TrisemiusCipher';
import Rsa from '../../exercises/Rsa/Rsa';
import './exercisepage.css';

/* eslint-disable react/prop-types */
function Exercisepage({surname, name, patronymic, variant}) {
	const location = useLocation();
	const { from } = location.state;
	const mode = from[4];

	function getName() {
		if (mode === 'cipherCaesar') {
			return 'Шифр Цезаря по открытому тексту';
		} else if (mode === 'cipherCaesarFrequency') {
			return 'Шифр Цезаря с использованием свойств языка';
		} else if (mode === 'cipherCaesarStrip') {
			return 'Шифр Цезаря «Полный перебор»';
		} else if (mode === 'replacementCipher') {
			return 'Шифр замены';
		} else if (mode === 'trisemiusCipher') {
			return 'Шифр Тритемиуса';
		} else if (mode === 'rsa') {
			return 'Шифр RSA';
		}
	}

	function getLayout() {
		if (mode === 'cipherCaesar') {
			return <CipherCaesar surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		} else if (mode === 'cipherCaesarFrequency') {
			return <СipherCaesarFrequency surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		} else if (mode === 'cipherCaesarStrip') {
			return <CipherCaesarStrip surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		} else if (mode === 'replacementCipher') {
			return <ReplacementCipher surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		} else if (mode === 'trisemiusCipher') {
			return <TrisemiusCipher surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		} else if (mode === 'rsa') {
			return <Rsa surname={surname} name={name} patronymic={patronymic} variant={ variant } />;
		}
	}
	
	return (
	<>
		
		<section className="exercise exercise-page">
			<p className="binary-animation">10100100011110101</p>
			<p className="binary-animation">1000011001111110101</p>
			<p className="binary-animation">1000011001111110101</p>
			<p className="binary-animation">10100100011110101</p>
			<div className="container">
				<Link to='/exercises' state={{ from: [surname, name, patronymic, variant]}} className="exercise-back"><span></span>Назад</Link>
				<h1 className="title">
					Задание варианта: #<span>{ variant }</span>
					<br />
					<span>{ getName() }</span>
				</h1>
				{ getLayout() }
			</div>
		</section>
	</>
	);
}

export default Exercisepage;