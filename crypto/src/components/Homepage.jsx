/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Headerfooter from './Headerfooter'

export default function Homepage() {
	const variant = Math.floor(1 + Math.random() * (80 + 1 - 1))

	return <>
		<div className="wrapper">
			<div className="content">
				<Headerfooter />
				<main className="main">
					<section className="exercise">
						<div className="container">
							<h1 className="title">
								Задания варианта: #<span className="variant-span">{variant}</span>
							</h1>
							<div className="exercise-flex">
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр Цезаря</h2>
									<Link to="/exercise" state={{ from: [variant, 'cipherCaesar']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр Цезаря: поиск частоты</h2>
									<Link to="/exercise" state={{ from: [variant, 'cipherCaesarFrequency']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр Гаммирования</h2>
									<Link to="/exercise" state={{ from: [variant, 'gammingCode']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр перестановки</h2>
									<Link to="/exercise" state={{ from: [variant, 'permutationCipher']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр Трисемиуса</h2>
									<Link to="/exercise" state={{ from: [variant, 'trisemiusCipher']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">Шифр Диффи-Хеммана</h2>
									<Link to="/exercise" state={{ from: [variant, 'cipherDiffieHellman']}} className="text link-task">Перейти к решению</Link>
								</article>
								<article className="exercise-flex__elem">
									<h2 className="title">RSA</h2>
									<Link to="/exercise" state={{ from: [variant, 'rsa']}} className="text link-task">Перейти к решению</Link>
								</article>
							</div>
						</div>
					</section>
				</main>
			</div>
			<Headerfooter />
		</div>
	</>
}