/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './variantspage.css';

function Variantspage({surname, name, patronymic, variant}) {
	return (
	<>
		<section className="exercise">
			<div className="container">
				<div className="exercise-flex">
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesar']}} className="exercise-flex__elem">
						<h2 className="title">
							Шифр Цезаря
							<span className="title-span">по открытому тексту</span>
						</h2>
						<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesar']}} className="text exercise-link">Перейти<span></span></Link>
					</Link>
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesarFrequency']}} className="exercise-flex__elem">
						<h2 className="title">
							Шифр Цезаря
							<span className="title-span">с использованием<br/>свойств языка</span>
						</h2>
						<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesarFrequency']}} className="text exercise-link">Перейти<span></span></Link>
					</Link>
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesarStrip']}} className="exercise-flex__elem">
						<h2 className="title">
							Шифр Цезаря
							<span className="title-span">«Полный перебор»</span>
						</h2>
						<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesarStrip']}} className="text exercise-link">Перейти<span></span></Link>
					</Link>
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'replacementCipher']}} className="exercise-flex__elem">
						<h2 className="title">Шифр замены</h2>
						<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'replacementCipher']}} className="text exercise-link">Перейти<span></span></Link>
					</Link>
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'trisemiusCipher']}} className="exercise-flex__elem">
						<h2 className="title">Шифр Тритемиуса</h2>
						<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'trisemiusCipher']}} className="text exercise-link">Перейти<span></span></Link>
					</Link>
					<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'rsa']}} className="exercise-flex__elem">
						<h2 className="title">
							Алгоритм RSA
							<span className="title-span">цифровая подпись</span>
						</h2>
						<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'rsa']}} className="text exercise-link">Перейти<span></span></Link>
					</Link>
				</div>
			</div>
		</section>
	</>
	);
}

export default Variantspage;