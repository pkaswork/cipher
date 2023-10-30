/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Image from '../assets/images/logo.svg'

export default function Header({ name, surname, group}) {
	function showExitLink() {
		if (!name && !surname & !group) {
			return null
		} else {
			return <>
				<div className="header-flex__elem">
					<p className="text name-text">{`${surname} ${name} ${group}`}</p>
					<Link to="/" className="link-exit">Выйти</Link>
				</div>
			</>
		}
	}
	return <>
		<header className="header">
					<div className="container">
						<a href="#" className="logo">
							<img src={Image} alt="logo" />
						</a>
						{showExitLink()}
					</div>
		</header>
	</>
}