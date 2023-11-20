import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';
import Image from '../../assets/images/logo.svg'

export default function Header({ isLogin, surname, name }) {
	return <>
		<header className="header">
			<div className="container">
				<div className="header-flex">
					<div className="header-flex__elem">
						<a href="#" className="logo">
							<img src={Image} alt="logo" />
						</a>
						<nav className="header-nav">
							<ul className="nav-list">
								<li className="nav-list__item">
									<Link to="/" className={(location.pathname === '/') ? 'active nav-link' : 'nav-link'}>Главная</Link>
								</li>
								<li className="nav-list__item">
									<Link to="/theory" className={(location.pathname === '/theory') ? 'active nav-link' : 'nav-link'}>Теория</Link>
								</li>
								{(isLogin === true) ? <li className="nav-list__item"><Link to="/exercises" className={(location.pathname === '/exercises') ? 'active nav-link' : 'nav-link'}>Задания</Link></li> : null}
							</ul>
						</nav>
						
					</div>
					<div className="header-flex__elem">
						<p className="nav-link">{surname} {name}</p>
						<Link to="/auth" className="nav-link">{(isLogin === true) ? 'Выйти' : 'Войти'}</Link>
					</div>
				</div>
				<div className="burger-menu">
					<a href="#" className="logo">
						<img src={Image} alt="logo" />
					</a>
					<div className="burger">
						<span></span>
					</div>
				</div>
			</div>
		</header>
	</>
}