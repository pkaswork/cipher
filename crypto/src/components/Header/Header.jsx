import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';
import Image from '../../assets/images/logo.svg'

export default function Header({ isLogin, surname, name, patronymic }) {
	return <>
		<header className="header">
			<div className="container">
				<div className="header-flex">
					<div className="header-flex__elem">
						<a href="#" className="logo">
							<img src={Image} alt="logo" />
						</a>
						<Link to="/">Главная</Link>
						<Link to="/">Теория</Link>
						{(isLogin === true) ? <Link to="/">Задания</Link> : null}
					</div>
					<div className="header-flex__elem">
						<p className="text name-text">{surname} {name} {patronymic}</p>
						<Link to="/auth">{(isLogin === true) ? 'Выйти' : 'Войти'}</Link>
					</div>
				</div>
			</div>
		</header>
	</>
}