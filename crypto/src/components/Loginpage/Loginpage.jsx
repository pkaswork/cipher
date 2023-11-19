import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Loginpage() {
	const [surname, setSurname] = useState('');
	const [name, setName] = useState('');
	const [patronymic, setPatronymic] = useState('');
	const [variant, setVariant] = useState('');

	return (
	<>
		<div className="wrapper">
			<div className="content">
				<Header />
				<main className="main">
					<section className="login">
						<div className="container">
							<div className="login-flex">
								<h1 className="title">
									Давайте окунемся в<br/>загадочный мир<br/>криптографии
								</h1>
								<form action="#" method="POST" className="login__form">
									<h2 className="subtitle">
										Вход
									</h2>
									<div className="login__input">
										<input 
											type="text" 
											id="surname" 
											name="surname"
											value={surname}
											onChange={event => setSurname(event.target.value)} 
											required 
										/>
										<label htmlFor="surname">Фамилия</label>
									</div>
									<div className="login__input">
										<input 
											type="text" 
											id="name" 
											name="name" 
											value={name}
											onChange={event => setName(event.target.value)} 
											required 
											/>
										<label htmlFor="name">Имя</label>
									</div>
									<div className="login__input">
										<input 
											type="text" 
											id="patronymic" 
											name="patronymic" 
											value={patronymic}
											onChange={event => setPatronymic(event.target.value)}
											required />
										<label htmlFor="patronymic">Отчество</label>
									</div>
									<div className="login__input">
										<input 
											type="text" 
											id="var" 
											name="var" 
											value={variant} 
											onChange={event => setVariant(event.target.value)} 
											required 
										/>
										<label htmlFor="var">Вариант</label>
									</div>
									<Link 
										to="/exercises" 
										state={{ from: [surname, name, patronymic, variant]}} 
									>
										<button type="button" className="btn" disabled={!surname || !name || !patronymic || !variant}>
											Войти
										</button>
									</Link>
								</form>
							</div>
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</div>
	</>
	);
}

export default Loginpage;