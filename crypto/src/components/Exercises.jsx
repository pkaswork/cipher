/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function Exercises({ variant }) {
	return <>
		<section className="exercise">
			<div className="container">
				<h1 className="title">
					Задания варианта: #<span className="variant-span">{variant}</span>
				</h1>
				<div className="exercise-flex">
					<article className="exercise-flex__elem">
						<h2 className="title">Шифр Цезаря</h2>
						<Link to="/exercise" data-ex="cipherCaesar" className="text link-task">Перейти к решению</Link>
					</article>
					<article className="exercise-flex__elem">
						<h2 className="title">Шифр Гаммирования</h2>
						<Link to="/exercise" data-ex="gammingCode" className="text link-task">Перейти к решению</Link>
					</article>
					<article className="exercise-flex__elem">
						<h2 className="title">Шифр перестановки</h2>
						<Link to="/exercise" data-ex="permutationCipher" className="text link-task">Перейти к решению</Link>
					</article>
					<article className="exercise-flex__elem">
						<h2 className="title">Шифр Трисемуса</h2>
						<Link to="/exercise" data-ex="trisemusCipher" className="text link-task">Перейти к решению</Link>
					</article>
					<article className="exercise-flex__elem">
						<h2 className="title">Шифр Диффи-Хеммана</h2>
						<Link to="/exercise" data-ex="cipherDiffieHellman" className="text link-task">Перейти к решению</Link>
					</article>
					<article className="exercise-flex__elem">
						<h2 className="title">RSA</h2>
						<Link to="/exercise" data-ex="rsa" className="text link-task">Перейти к решению</Link>
					</article>
				</div>
			</div>
		</section>
	</>
}