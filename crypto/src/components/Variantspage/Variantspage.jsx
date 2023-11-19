/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Variantspage() {
	const location = useLocation();
	const { from } = location.state;
	const surname = from[0];
	const name = from[1];
	const patronymic = from[2];
	const variant = from[3];

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
					<section className="exercise">
						<div className="container">
							<h1 className="title">
								Задания варианта: #<span className="variant-span">{variant}</span>
							</h1>
							<div className="exercise-flex">
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр Цезаря</h2>
									<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesar']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр Цезаря: поиск частоты</h2>
									<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherCaesarFrequency']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр Гаммирования</h2>
									<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'gammingCode']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр перестановки</h2>
									<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'permutationCipher']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр Трисемиуса</h2>
									<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'trisemiusCipher']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр Диффи-Хеммана</h2>
									<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'cipherDiffieHellman']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">RSA</h2>
									<Link to="/exercise" state={{ from: [surname, name, patronymic, variant, 'rsa']}} className="text link-task">Перейти к решению</Link>
								</article>
							</div>
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</div>
	</>
	);
}

export default Variantspage;