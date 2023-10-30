import Header from './header'
import Login from './login'
import Footer from './footer'

export default function Loginpage() {
	return <>
	<div className="wrapper">
		<div className="content">
			<Header/>
			<main className="main">
				<Login/>
			</main>
		</div>
		<Footer/>
	</div>
	</>
}