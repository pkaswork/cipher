import React from 'react';
import { Link } from 'react-router-dom'
import Image from '../../assets/images/logo.svg'

export default function Header({ isLogin, surname, name, patronymic }) {
	return <>
		<header className="header">
			<div className="container">
				{
					(isLogin === true) ?
					<div className="header-flex">
						<a href="#" className="logo">
							<img src={Image} alt="logo" />
						</a>
						<div className="header-flex__elem">
							<p className="text name-text">{surname} {name} {patronymic}</p>
							<Link to="/" className="link-exit">Выйти</Link>
						</div>
					</div>
					:
					<a href="#" className="logo">
						<img src={Image} alt="logo" />
					</a>
				}
				
			</div>
		</header>
	</>
}