import Header from './header'
import Exercise from './exercise'
import Footer from './footer'

export default function Exercisepage() {
	return <>
	<div className="wrapper">
		<div className="content">
			<Header />
			<main className="main">
				<Exercise />
			</main>
		</div>
		<Footer />
	</div>
	</>
}