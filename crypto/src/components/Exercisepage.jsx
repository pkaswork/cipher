import Headerfooter from './Headerfooter'
import Exercise from './exercise'

export default function Exercisepage() {
	return <>
	<div className="wrapper">
		<div className="content">
			<Headerfooter />
			<main className="main">
				<Exercise />
			</main>
		</div>
		<Headerfooter />
	</div>
	</>
}