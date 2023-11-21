import React, { useState } from 'react';
import Modal from '../../Modal/Modal';

let messages = [
	'СООБЩИТЕ_ВАШИ_РЕКВИЗИТЫ_ТЧК',
	'УСКОРЬТЕ_ПОСТАВКУ_ЗАПЧАСТЕЙ',
	'ЗАДЕРЖИТЕ_ОТГРУЗКУ_МЕТАЛЛА',
	'ЗАКЛЮЧАЙТЕ_ДОГОВОР_ПОСТАВКУ',
	'ОПЛАТА_ТРАНСПОРТИРОВКИ_ВНИЗ',
	'ОРГАНИЗУЙТЕ_ПРОИЗВОДСТВО',
	'КОМАНДИРУЙТЕ_ПРЕДСТАВИТЕЛЯ',
	'ДОСТАВЬТЕ_РАДИАТОРЫ_БЫСТРЕЕ',
	'ОПЛАТИТЕ_РАДИОТОВАРЫ_ОПТОМ',
	'СТРАХОВАНИЕ_ПЕРЕВОЗА_ГРУЗА',
	'ГАРАНТИРУЙТЕ_КАЧЕСТВО_МЕХА',
	'СООБЩАЮ_ВАШИ_РЕКВИЗИТЫ_ИВАН',
	'ПОСТАВКА_НЕФТЕПРОДУКТОВ',
	'ОПТОВАЯ_ПРОДАЖА_СО_СКЛАДОВ',
	'ОПТОВАЯ_ТОРГОВЛЯ_ПРОДУКТАМИ',
	'ПРОИЗВОДСТВО_ПРИОСТАНОВЛЕНО',
	'ДОГОВОР_НА_ПОСТАВКУ_ГОТОВ',
	'ГРУЗЫ_НА_ПЛАТФОРМАХ_КРЕПИТЬ',
	'ЗАЩИТИТЕ_ГРУЗ_ОТ_НЕНАСТЬЯ',
	'ТОВАР_ОТПРАВЛЯЙТЕ_СЕЙЧАС_ЖЕ'
];
let key = 'СУХАРЕВ';

function TrisemiusCipher({ surname, name, patronymic, variant }) {
	const [winText, setWinText] = useState('Запишите код шифрованного текста');
	const [win, setWin] = useState(false);
	const [values, setValues] = useState([
		{
			id: 0,
			label: 'A',
			name: 'a',
			value: ''
		},
		{
			id: 1,
			label: 'Б',
			name: 'b',
			value: ''
		},
		{
			id: 2,
			label: 'В',
			name: 'v',
			value: ''
		},
		{
			id: 3,
			label: 'Г',
			name: 'g',
			value: ''
		},
		{
			id: 4,
			label: 'Д',
			name: 'd',
			value: ''
		},
		{
			id: 5,
			label: 'Е',
			name: 'e',
			value: ''
		},
		{
			id: 6,
			label: 'Ж',
			name: 'zh',
			value: ''
		},
		{
			id: 7,
			label: 'З',
			name: 'z',
			value: ''
		},
		{
			id: 8,
			label: 'И',
			name: 'i',
			value: ''
		},
		{
			id: 9,
			label: 'Й',
			name: 'iq',
			value: ''
		},
		{
			id: 10,
			label: 'К',
			name: 'k',
			value: ''
		},
		{
			id: 11,
			label: 'Л',
			name: 'l',
			value: ''
		},
		{
			id: 12,
			label: 'М',
			name: 'm',
			value: ''
		},
		{
			id: 13,
			label: 'Н',
			name: 'n',
			value: ''
		},
		{
			id: 14,
			label: 'О',
			name: 'o',
			value: ''
		},
		{
			id: 15,
			label: 'П',
			name: 'p',
			value: ''
		},
		{
			id: 16,
			label: 'Р',
			name: 'r',
			value: ''
		},
		{
			id: 17,
			label: 'С',
			name: 's',
			value: ''
		},
		{
			id: 18,
			label: 'Т',
			name: 't',
			value: ''
		},
		{
			id: 19,
			label: 'У',
			name: 'u',
			value: ''
		},
		{
			id: 20,
			label: 'Ф',
			name: 'f',
			value: ''
		},
		{
			id: 21,
			label: 'Х',
			name: 'h',
			value: ''
		},
		{
			id: 22,
			label: 'Ц',
			name: 'c',
			value: ''
		},
		{
			id: 23,
			label: 'Ч',
			name: 'ch',
			value: ''
		},
		{
			id: 24,
			label: 'Ш',
			name: 'sh',
			value: ''
		},
		{
			id: 25,
			label: 'Щ',
			name: 'shch',
			value: ''
		},
		{
			id: 26,
			label: 'Ь',
			name: 'mb',
			value: ''
		},
		{
			id: 27,
			label: 'Ы',
			name: 'bl',
			value: ''
		},
		{
			id: 28,
			label: 'Ъ',
			name: 'tb',
			value: ''
		},
		{
			id: 39,
			label: 'Э',
			name: 'ae',
			value: ''
		},
		{
			id: 30,
			label: 'Ю',
			name: 'yu',
			value: ''
		},
		{
			id: 31,
			label: 'Я',
			name: 'ya',
			value: ''
		},
		{
			id: 32,
			label: '_',
			name: 'space',
			value: ''
		},
	]);
	const [prewin, setPrewin] = useState('');
	const [modalActive, setModalActive] = useState(false);

	function replaceLetters(text) {
		const dictionary = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ_';
		let replaced = '';

		for (let i = 0; i < text.length; i++) {
			const char = text[i].toUpperCase();
			const charIndex = dictionary.indexOf(char);

			if (charIndex === -1) {
				replaced += char;
			} else {
				const keyIndex = i % key.length;
				const keyChar = key[keyIndex];
				const keyCharIndex = dictionary.indexOf(keyChar);
				const encryptedIndex = (charIndex + keyCharIndex + 1) % 33;
				const encryptedChar = dictionary[encryptedIndex];

				replaced += encryptedChar;
			}
		}

		return replaced;
	}

	function handleChange(event) {
		const prevState = [...values];
		prevState.find(item => item.name === event.target.name).value = event.target.value;
		setValues(prevState);
	}

	function onSubmitWin() {
		let rightAnswer = replaceLetters('АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ_');
		let userAnswer = values.map(item => item.value).join('').toUpperCase();

		if (userAnswer === rightAnswer) {
			setWin(true);
			setWinText('Вы правильно ввели код');
		} else {
			setWin(false);
			setWinText('Вы неправильно ввели код');
		}
	}

	function onSubmitPreWin() {
		let rightSNP = replaceLetters(`${surname}_${name}_${patronymic}`);

		if (rightSNP === prewin.toUpperCase()) {
			setModalActive(true);
		}
	}

	return (
	<>
		<Modal 
			title="Поздравляем!"
			text={ `${surname} ${name}` } 
			active={ modalActive } 
			setActive={ setModalActive } 
		/>
		<div className="exercise-box">
			<div className="exercise-box__body-text">
				<p className="text">В вашем распоряжении имеются двадцать сообщений(телеграмм). Известно, что подпись каждой из телеграмм содержит фразу: <b>{key}</b></p>
			</div>
			<div className="exercise-box__body-text">
				<h2 className="subtitle">
					Телеграммы
				</h2>
				<ol className="exercise-list">
					{messages.map((item, index) => {
						return (
							<>
								<li key={index} className="exercise-list__item">
									{replaceLetters(item)}
								</li>
							</>
						);
					})}
				</ol>
			</div>
			<div className="exercise-box__body-text">
				<h2 className="subtitle">Подпись: {replaceLetters(key)}</h2>
			</div>
			<form action="#" method="POST" className="exercise-form">
				<h2 className="subtitle">
					{ winText }
				</h2>
				{values.map(item => {
					return <>
						<div key={ item.id } className="exercise-input">
							<label htmlFor={ item.name }>
								{ item.label }
							</label>
							<input 
								type="text"
								id={ item.id } 
								name={ item.name } 
								value={ item.value } 
								onChange={e => handleChange(e)} 
								className="word-input" 
								placeholder="?" 
							/>
						</div>
					</>
				})}
				<div className="exercise-form-button">
					<input 
						type="button" 
						className="btn" 
						onClick={onSubmitWin}
						value="Ввести" 
					/>
				</div>
			</form>
			<form action="#" method="POST" className="exercise-form exercise-form-prewin">
				<h2 className="subtitle">Используя полученный код (шифр), закодируйте с его помошью своё ФИО:</h2>
				<input 
					type="text" 
					value={ prewin } 
					onChange={event => setPrewin(event.target.value)} 
					className="prewin-input" 
					name="prewin" 
					disabled={ !win } 
				/>
				<input 
					type="button" 
					value="Ввести" 
					onClick={onSubmitPreWin} 
					disabled={ !win } 
					className="btn" 
				/>
			</form>
		</div>
	</>
	);
}

export default TrisemiusCipher;