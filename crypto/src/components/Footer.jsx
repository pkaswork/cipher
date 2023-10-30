import Image from "../assets/images/logo.svg"

export default function Footer() {
	return <>
		<header className="footer">
					<div className="container">
						<a href="#" className="logo">
							<img src={Image} alt="logo" />
						</a>
					</div>
		</header>
	</>
}