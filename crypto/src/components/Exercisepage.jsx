import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Exercise from './exercise'

export default function Exercisepage() {
	const location = useLocation()
	const { from } = location.state
	const surname = from[0]
	const name = from[1]
	const patronymic = from[2]

	return <>
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
}