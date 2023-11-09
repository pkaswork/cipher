import { useState } from 'react'

export default function СipherCaesarFrequency({ variant }) {
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
	])

	function handleChange(event) {
		const prevState = [...values]
		prevState.find(item => item.name === event.target.name).value = event.target.value
		setValues(prevState)
	}

	return <>
		<div className="exercise-box">
			<div className="exercise-box__body-text">
				<p className="text">
					Имеется некоторый закрытый (зашифрованный) текст и фраза этого текста. Известна вероятность появления символов алфавита.<br />
					Определив вероятность появления символов текста, найдите код алфавита текста, дешифрируйте заданную фразу и используя найденный код алфавита, зашифруйте свою фамилию (имя, отчество).</p>
			</div>
			<div className="exercise-box__body-text">
				<h2 className="text sercet">
					Фраза
				</h2>
			</div>
			<div className="exercise-box__body-text">
				<h2 className="text secret">
					Вероятность появления символов алфавита:
				</h2>
			</div>
			<form action="#" method="POST" className="exercise-form">
				<h2 className="subtitle win-text">
					Определите код алфавита текста:
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
				<div className="button-container">
					<input 
						type="button" 
						className="btn" 
						value="Ввести" 
					/>
					<button 
						type="button" 
						className="btn" 
						onClick={() => setModalActive(true)}
					>Текст</button>
				</div>
			</form>
			<form action="#" method="POST" className="exercise-form exercise-form-prewin">
				<p className="text">Запишите дешифрованную фразу:</p>
				<input 
					type="text" 
					name="name" 
				/>
				<input 
					type="button" 
					value="Ввести" 
					className="btn" 
				/>
			</form>
			<form action="#" method="POST" className="exercise-form exercise-form-prewin">
				<p className="text">Используя код алфавита, зашифруйте с его помошью свое ФИО:</p>
				<input 
					type="text" 
					name="name" 
				/>
				<input 
					type="button" 
					value="Ввести" 
					className="btn" 
				/>
			</form>
		</div>
	</>
}