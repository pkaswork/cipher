/* eslint-disable react/prop-types */
import Image from '../assets/images/logo.svg'

export default function Header() {
	return <>
		<header className="header">
			<div className="container">
				<a href="#" className="logo">
					<img src={Image} alt="logo" />
				</a>
			</div>
		</header>
	</>
}