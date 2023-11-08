import { useState } from 'react'
import Modal from '../Modal'

let fragmentOfText = 'НО_ПОД_СТАРОСТЬ_ЗАХОТЕЛ_ОТДОХНУТЬ_ОТ_РАТНЫХ_ДЕЛ_И_ПОКОЙ_СЕБЕ_УСТРОИТЬ'

function tezaurus() {
	return <>
		НЕГДЕ_В_ТРИДЕВЯТОМ_<br/>
		ЦАРСТВЕ_В_ТРИДЕСЯТОМ<br/>
		_ГОСУДАРСТВЕ_ЖИЛ_БЫЛ<br/>
		_СЛАВНЫЙ_ЦАРЬ_ДАДОН<br/>
		_С_МОЛОДУ_БЫЛ_ГРОЗЕН<br/>
		_ОН_И_СОСЕДЯМ_ТО_И_<br/>
		ДЕЛО_НАНОСИЛ_ОБИДЫ_<br/>
		СМЕЛО_НО_ПОД_СТАРОСТЬ<br/>
		_ЗАХОТЕЛ_ОТДОХНУТЬ<br/>
		_ОТ_РАТНЫХ_ДЕЛ_И_ПОКОЙ<br/>
		_СЕБЕ_УСТРОИТЬ_ТУТ_<br/>
		СОСЕДИ_БЕСПОКОИТЬ_СТАЛИ<br/>
		_СТАРОГО_ЦАРЯ_СТРАШНЫЙ<br/>
		_ВРЕД ЕМУ_ТВОРЯ<br/>
	</>
}

export default function CipherCaesar({ variant }) {
	const [values, setValues] = useState([
		{
			id: 1,
			label: 'A',
			name: 'a',
			value: ''
		},
		{
			id: 2,
			label: 'Б',
			name: 'b',
			value: ''
		},
		{
			id: 3,
			label: 'В',
			name: 'v',
			value: ''
		},
		{
			id: 4,
			label: 'Г',
			name: 'g',
			value: ''
		},
		{
			id: 5,
			label: 'Д',
			name: 'd',
			value: ''
		},
		{
			id: 6,
			label: 'Е',
			name: 'e',
			value: ''
		},
		{
			id: 7,
			label: 'Ж',
			name: 'zh',
			value: ''
		},
		{
			id: 8,
			label: 'З',
			name: 'z',
			value: ''
		},
		{
			id: 9,
			label: 'i',
			name: 'И',
			value: ''
		},
		{
			id: 10,
			label: 'Й',
			name: 'iq',
			value: ''
		},
		{
			id: 11,
			label: 'К',
			name: 'k',
			value: ''
		},
		{
			id: 12,
			label: 'Л',
			name: 'l',
			value: ''
		},
		{
			id: 13,
			label: 'М',
			name: 'm',
			value: ''
		},
		{
			id: 14,
			label: 'Н',
			name: 'n',
			value: ''
		},
		{
			id: 15,
			label: 'О',
			name: 'o',
			value: ''
		},
		{
			id: 16,
			label: 'П',
			name: 'p',
			value: ''
		},
		{
			id: 17,
			label: 'Р',
			name: 'r',
			value: ''
		},
		{
			id: 18,
			label: 'С',
			name: 's',
			value: ''
		},
		{
			id: 19,
			label: 'Т',
			name: 't',
			value: ''
		},
		{
			id: 20,
			label: 'У',
			name: 'u',
			value: ''
		},
		{
			id: 21,
			label: 'Ф',
			name: 'f',
			value: ''
		},
		{
			id: 22,
			label: 'Х',
			name: 'h',
			value: ''
		},
		{
			id: 23,
			label: 'Ц',
			name: 'c',
			value: ''
		},
		{
			id: 24,
			label: 'Ч',
			name: 'ch',
			value: ''
		},
		{
			id: 25,
			label: 'Ш',
			name: 'sh',
			value: ''
		},
		{
			id: 26,
			label: 'Щ',
			name: 'shch',
			value: ''
		},
		{
			id: 27,
			label: 'Ь',
			name: 'mb',
			value: ''
		},
		{
			id: 28,
			label: 'Ы',
			name: 'bl',
			value: ''
		},
		{
			id: 29,
			label: 'Ъ',
			name: 'tb',
			value: ''
		},
		{
			id: 30,
			label: 'Э',
			name: 'ae',
			value: ''
		},
		{
			id: 31,
			label: 'Ю',
			name: 'yu',
			value: ''
		},
		{
			id: 32,
			label: 'Я',
			name: 'ya',
			value: ''
		},
		{
			id: 33,
			label: '_',
			name: 'space',
			value: ''
		},
	])
	const [prewin, setPrewin] = useState('')
	const [modalActive, setModalActive] = useState(false)
	
	let cipherData = {
		'shift' : variant,
		'code' : {
			'А' : '',    'Б' : '',    'В' : '',    'Г' : '',    'Д' : '',
			'Е' : '',    'Ж' : '',   'З' : '',    'И' : '',	'Й' : '',
			'К' : '',    'Л' : '',    'М' : '',    'Н' : '',    'О' : '',    
			'П' : '',    'Р' : '',    'С' : '',    'Т' : '',    'У' : '',
			'Ф' : '',    'Х' : '',    'Ц' : '',    'Ч' : '',   'Ш' : '',
			'Щ' : '',  	'Ь' : '',     'Ы' : '',    'Э' : '', 	'Ю' : '',
			'Я' : '',   '_' : '',
		},
		'alph' : ['А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы','Э','Ю','Я','_','А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы','Э','Ю','Я','_','А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы','Э','Ю','Я','_','А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы','Э','Ю','Я','_'],
		'win' : false,
		'winText' : 'Запишите код шифрованного текста',
		'tried' : false
	}

	function setGame() {
		cipherData['code']['А'] = cipherData['alph'][cipherData['shift']]
		cipherData['code']['Б'] = cipherData['alph'][cipherData['shift'] + 1]
		cipherData['code']['В'] = cipherData['alph'][cipherData['shift'] + 2]
		cipherData['code']['Г'] = cipherData['alph'][cipherData['shift'] + 3]
		cipherData['code']['Д'] = cipherData['alph'][cipherData['shift'] + 4]
		cipherData['code']['Е'] = cipherData['alph'][cipherData['shift'] + 5]
		cipherData['code']['Ж'] = cipherData['alph'][cipherData['shift'] + 6]
		cipherData['code']['З'] = cipherData['alph'][cipherData['shift'] + 7]
		cipherData['code']['И'] = cipherData['alph'][cipherData['shift'] + 8]
		cipherData['code']['Й'] = cipherData['alph'][cipherData['shift'] + 9]
		cipherData['code']['К'] = cipherData['alph'][cipherData['shift'] + 10]
		cipherData['code']['Л'] = cipherData['alph'][cipherData['shift'] + 11]
		cipherData['code']['М'] = cipherData['alph'][cipherData['shift'] + 12]
		cipherData['code']['Н'] = cipherData['alph'][cipherData['shift'] + 13]
		cipherData['code']['О'] = cipherData['alph'][cipherData['shift'] + 14]
		cipherData['code']['П'] = cipherData['alph'][cipherData['shift'] + 15]
		cipherData['code']['Р'] = cipherData['alph'][cipherData['shift'] + 16]
		cipherData['code']['С'] = cipherData['alph'][cipherData['shift'] + 17]
		cipherData['code']['Т'] = cipherData['alph'][cipherData['shift'] + 18]
		cipherData['code']['У'] = cipherData['alph'][cipherData['shift'] + 19]
		cipherData['code']['Ф'] = cipherData['alph'][cipherData['shift'] + 20]
		cipherData['code']['Х'] = cipherData['alph'][cipherData['shift'] + 21]
		cipherData['code']['Ц'] = cipherData['alph'][cipherData['shift'] + 22]
		cipherData['code']['Ч'] = cipherData['alph'][cipherData['shift'] + 23]
		cipherData['code']['Ш'] = cipherData['alph'][cipherData['shift'] + 24]
		cipherData['code']['Щ'] = cipherData['alph'][cipherData['shift'] + 25]
		cipherData['code']['Ь'] = cipherData['alph'][cipherData['shift'] + 26]
		cipherData['code']['Ы'] = cipherData['alph'][cipherData['shift'] + 27]
		cipherData['code']['Ъ'] = cipherData['alph'][cipherData['shift'] + 28]
		cipherData['code']['Э'] = cipherData['alph'][cipherData['shift'] + 29]
		cipherData['code']['Ю'] = cipherData['alph'][cipherData['shift'] + 30]
		cipherData['code']['Я'] = cipherData['alph'][cipherData['shift'] + 31]
		cipherData['code']['_'] = cipherData['alph'][cipherData['shift'] + 32]
	}

	setGame()

	function replaceLetters(text) {
		let replaced = text.toUpperCase()
		let str = ''
		
		for (let i = 0; i < replaced.length; i++) {
			str += cipherData['code'][replaced[i]]
		}
	
		return str
	}

	function getAnswer(shift) {
		let rightAnswer = ''
	
		for (let i = 33; i <= 132; i++) { 
			rightAnswer = rightAnswer + cipherData['alph'][i - shift]
		}
	
		return rightAnswer
	}

	function handleChange(e) {
		const value = e.target.value
		const name = e.target.name
		const prevState = [...values]
		// change value code
		setValues(prevState)
	}

	function onSubmitWin() {
		let rightAnswer = getAnswer(cipherData['shift'])
		let userAnswer = 'adffsffdsd'.toUpperCase() // here will be values from inputs, this is just an example

		if (userAnswer === rightAnswer) {
			cipherData['win'] = true
			cipherData['winText'] = 'Вы правильно ввели код'
			cipherData['tried'] = true
		} else {
			cipherData['win'] = false
			cipherData['winText'] = 'Вы неправильно ввели код'
		}
	}

	function onSubmitPreWin(event) {
		event.preventDefault()
		// code
	}

	return <>
		<Modal 
			title="Тезарус"
			text={ tezaurus() } 
			active={ modalActive } 
			setActive={ setModalActive } 
		/>
		<div className="exercise-box">
			<div className="exercise-box__body-text">
				<p className="text">Прочитайте нижеприведенный текст, а затем найдите код его алфавита. В качестве тезауруса используйте то обстоятельство, что текст составлен из двадцати первых строк произведения А. С. Пушкина "Сказка о Золотом Петушке".</p>
			</div>
			<div className="exercise-box__body-text">
				<h2 className="text secret">
					{ replaceLetters(fragmentOfText) }
				</h2>
			</div>
			<form action="#" method="POST" className="exercise-form">
				<h2 className="subtitle win-text">
					{ cipherData['winText'] }
				</h2>
				{values.map(item => {
					return <>
						<div key={ item.id } className="exercise-input">
							<label 
								key={ item.id }
								htmlFor={ item.name }
							>
								{ item.label }
							</label>
							<input 
								type="text"
								key={ item.id } 
								id={ item.name } 
								name={ item.name } 
								value={ item.value } 
								onChange={ handleChange} 
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
						onClick={onSubmitWin} 
						value="Ввести" 
					/>
					<button 
						type="button" 
						className="btn" 
						onClick={() => setModalActive(true)}
					>Тезарус</button>
				</div>
			</form>
			<form action="#" method="POST" className="exercise-form exercise-form-prewin">
				<p className="text">Используя полученный код (шифр), закодируйте с его помошью своё ФИО:</p>
				<input 
					type="text" 
					value={ prewin } 
					onChange={event => setPrewin(event.target.value)} className="prewin-input" 
					name="name" 
					disabled={ !cipherData['win'] } 
				/>
				<input 
					type="submit" 
					value="Ввести" 
					onSubmit={onSubmitPreWin} 
					disabled={ !cipherData['win'] } 
					className="btn prewin-input-submit" 
				/>
			</form>
		</div>
	</>
}