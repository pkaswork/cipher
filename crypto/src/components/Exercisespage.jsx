import Header from './header'
import Exercises from './exercises'
import Footer from './footer'

export default function Exercisepage() {
	return <>
	<div className="wrapper">
		<div className="content">
			<Header />
			<main className="main">
				<Exercises />
			</main>
		</div>
		<Footer />
	</div>
	</>
}