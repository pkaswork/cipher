import Headerfooter from './Headerfooter'

export default function Notfoundpage() {
	return <>
		<div className="wrapper">
			<div className="content">
				<Headerfooter />
				<main className="main">
					<section>
						<h2 className="title">Страница не найдена</h2>
					</section>
				</main>
			</div>
			<Headerfooter />
		</div>
	</>
}