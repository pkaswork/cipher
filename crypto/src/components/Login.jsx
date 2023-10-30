export default function Login() {
	return <>
		<section className="login">
					<div className="container">
						<div className="login-flex">
							<h1 className="title">
								Давайте окунемся в<br/>загадочный мир<br/>криптографии
							</h1>
							<form action="index.php" method="POST" className="login__form">
								<h2 className="subtitle">
									Вход
								</h2>
								<div className="login__input">
									<input type="text" id="surname" name="surname" required />
									<label htmlFor="surname">Фамилия</label>
								</div>
								<div className="login__input">
									<input type="text" id="name" name="name" required />
									<label htmlFor="name">Имя</label>
								</div>
								<div className="login__input">
									<input type="text" id="var" name="var" required />
									<label htmlFor="var">Вариант</label>
								</div>
								<input type="submit" value="Войти" className="btn" />
							</form>
						</div>
					</div>
				</section>
	</>
}