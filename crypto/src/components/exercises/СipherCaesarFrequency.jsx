import { useState } from 'react'
import Modal from '../Modal'

let phrase = 'МОСКВА_СПАЛЕННАЯ_ПОЖАРОМ'
let fragmentOfText = 'МОСКВА_СПАЛЕННАЯ_ПОЖАРОМ_НЕ_ТО_ЧТО_НЫНЕШНЕЕ_ПЛЕМЯ_ДОСАДНО_БЫЛО_БОЯ_ЖДАЛИ_ЕСТЬ_РАЗГУЛЯТЬСЯ_ГДЕ_НА_ВОЛЕ_И_ДУМАЛ_УГОЩУ_Я_ДРУГА_ЧТО_ТОЛКУ_В_ЭТАКОЙ_БЕЗДЕЛКЕ_И_СЛЫШНО_БЫЛО_ДО_РАССВЕТА_ВСЕ_ШУМНО_ВДРУГ_ЗАШЕВЕЛИЛОСЬ_РЕБЯТА_НЕ_МОСКВА_ЛЬ_ЗА_НАМИ_ФРАНЦУЗЫ_ДВИНУЛИСЬ_КАК_ТУЧИ_НОСИЛИСЬ_ЗНАМЕНА_КАК_ТЕНИ_ЧТО_ЗНАЧИТ_РУССКИЙ_БОЙ_УДАЛЫЙ_ЗАУТРО_БОЙ_ЗАТЕЯТЬ_НОВЫЙ_МОГУЧЕЕ_ЛИХОЕ_ПЛЕМЯ_ФРАНЦУЗУ_ОТДАНА_БОГАТЫРИ_НЕ_ВЫ_ВОРЧАЛИ_СТАРИКИ_ПОСТРОИЛИ_РЕДУТ_ПОСТОЙ_КА_БРАТ_МУСЬЮ_МЫ_ЖДАЛИ_ТРЕТИЙ_ДЕНЬ_КАК_ЛИКОВАЛ_ФРАНЦУЗ_СВЕРКНУЛ_ЗА_СТРОЕМ_СТРОЙ_УМРЕМТЕ_Ж_ПОД_МОСКВОЙ_И_ВСЕ_НА_НАШ_РЕДУТ_В_ДЫМУ_ОГОНЬ_БЛЕСТЕЛ_НАШ_РУКОПАШНЫЙ_БОЙ_И_ДО_КОНЦА_СТОЯТЬ_БОГАТЫРИ_НЕ_ВЫ_ВЕДЬ_БЫЛИ_Ж_СХВАТКИ_БОЕВЫЕ_ПЛОХАЯ_ИМ_ДОСТАЛАСЬ_ДОЛЯ_ЧТО_Ж_МЫ_НА_ЗИМНИЕ_КВАРТИРЫ_У_НАШИХ_УШКИ_НА_МАКУШКЕ_ЧТО_ТУТ_ХИТРИТЬ_ПОЖАЛУЙ_К_БОЮ_ПОВСЮДУ_СТАЛИ_СЛЫШНЫ_РЕЧИ_НО_ТИХ_БЫЛ_НАШ_БИВАК_ОТКРЫТЫЙ_ПОЛКОВНИК_НАШ_РОЖДЕН_БЫЛ_ХВАТОМ_КАК_НАШИ_БРАТЬЯ_УМИРАЛИ_УЛАНЫ_С_ПЕСТРЫМИ_ЗНАЧКАМИ_ЗВУЧАЛ_БУЛАТ_КАРТЕЧЬ_ВИЗЖАЛА_ЗЕМЛЯ_ТРЯСЛАСЬ_КАК_НАШИ_ГРУДИ_НО_ЗАТРЕЩАЛИ_БАРАБАНЫ_ПЛОХАЯ_ИМ_ДОСТАЛАСЬ_ДОЛЯ_ДА_ГОВОРЯТ_ЕЩЕ_КАКИЕ_НЕМНОГИЕ_ВЕРНУЛИСЬ_С_ПОЛЯ_НЕ_СМЕЮТ_ЧТО_ЛИ_КОМАНДИРЫ_ЧУТЬ_УТРО_ОСВЕТИЛО_ПУШКИ_УЖ_МЫ_ПОЙДЕМ_ЛОМИТЬ_СТЕНОЮ_ПОРА_ДОБРАТЬСЯ_ДО_КАРТЕЧИ_КТО_КИВЕР_ЧИСТИЛ_ВЕСЬ_ИЗБИТЫЙ_СЛУГА_ЦАРЮ_ОТЕЦ_СОЛДАТАМ_И_УМЕРЕТЬ_МЫ_ОБЕЩАЛИ_ДРАГУНЫ_С_КОНСКИМИ_ХВОСТАМИ_РУКА_БОЙЦОВ_КОЛОТЬ_УСТАЛА_СМЕШАЛИСЬ_В_КУЧУ_КОНИ_ЛЮДИ_И_ОТСТУПИЛИ_БУСУРМАНЫ_НЕМНОГИЕ_ВЕРНУЛИСЬ_С_ПОЛЯ_НЕДАРОМ_ПОМНИТ_ВСЯ_РОССИЯ_НЕ_БУДЬ_НА_ТО_ГОСПОДНЯ_ВОЛЯ_ЧУЖИЕ_ИЗОРВАТЬ_МУНДИРЫ_И_ЛЕСА_СИНИЕ_ВЕРХУШКИ_УЖ_ПОСТОИМ_МЫ_ГОЛОВОЮ_И_ВОТ_НА_ПОЛЕ_ГРОЗНОЙ_СЕЧИ_КТО_ШТЫК_ТОЧИЛ_ВОРЧА_СЕРДИТО_ДА_ЖАЛЬ_ЕГО_СРАЖЕН_БУЛАТОМ_И_КЛЯТВУ_ВЕРНОСТИ_СДЕРЖАЛИ_ВСЕ_ПРОМЕЛЬКНУЛИ_ПЕРЕД_НАМИ_И_ЯДРАМ_ПРОЛЕТАТЬ_МЕШАЛА_И_ЗАЛПЫ_ТЫСЯЧИ_ОРУДИЙ_ТОГДА_СЧИТАТЬ_МЫ_СТАЛИ_РАНЫ_КОГДА_Б_НА_ТО_НЕ_БОЖЬЯ_ВОЛЯ_ПРО_ДЕНЬ_БОРОДИНА_НЕ_ОТДАЛИ_Б_МОСКВЫ_О_РУССКИЕ_ШТЫКИ_ФРАНЦУЗЫ_ТУТ_КАК_ТУТ_ЗА_РОДИНУ_СВОЮ_НОЧНАЯ_ПАЛА_ТЕНЬ_КУСАЯ_ДЛИННЫЙ_УС_ОН_СПИТ_В_ЗЕМЛЕ_СЫРОЙ_МЫ_В_БОРОДИНСКИЙ_БОЙ_ВСЕ_ПОБЫВАЛИ_ТУТ_ГОРА_КРОВАВЫХ_ТЕЛ_СЛИЛИСЬ_В_ПРОТЯЖНЫЙ_ВОЙ_ТОВАРИЩЕЙ_СЧИТАТЬ_НЕ_ОТДАЛИ_Б_МОСКВЫ_ДА_БЫЛИ_ЛЮДИ_В_НАШЕ_ВРЕМЯ_МЫ_ДОЛГО_МОЛЧА_ОТСТУПАЛИ_И_ВОТ_НАШЛИ_БОЛЬШОЕ_ПОЛЕ_ЗАБИЛ_ЗАРЯД_Я_В_ПУШКУ_ТУГО_ДВА_ДНЯ_МЫ_БЫЛИ_В_ПЕРЕСТРЕЛКЕ_ПРИЛЕГ_ВЗДРЕМНУТЬ_Я_У_ЛАФЕТА_И_ТОЛЬКО_НЕБО_ЗАСВЕТИЛОСЬ_И_МОЛВИЛ_ОН_СВЕРКНУВ_ОЧАМИ_НУ_Ж_БЫЛ_ДЕНЕК_СКВОЗЬ_ДЫМ_ЛЕТУЧИЙ_ВАМ_НЕ_ВИДАТЬ_ТАКИХ_СРАЖЕНИЙ_ИЗВЕДАЛ_ВРАГ_В_ТОТ_ДЕНЬ_НЕМАЛО_ВОТ_СМЕРКЛОСЬ_БЫЛИ_ВСЕ_ГОТОВЫ_ДА_БЫЛИ_ЛЮДИ_В_НАШЕ_ВРЕМЯ_СКАЖИ_КА_ДЯДЯ_ВЕДЬ_НЕДАРОМ'

export default function СipherCaesarFrequency({ surname, name, patronymic, variant }) {
	const [winText, setWinText] = useState('Определите код алфавита текста:')
	const [win, setWin] = useState(false)
	const [tried, setTried] = useState(false)
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
	const [phraseVal, setPhraseVal] = useState('')
	const [snpVal, setSnpVal] = useState('')
	const [modalActive, setModalActive] = useState(false)
	const [modalWin, setModalWin] = useState(false)

	let cipherData = {
		'shift' : +variant,
		'code' : {
			'А' : '',    'Б' : '',    'В' : '',    'Г' : '',    'Д' : '',
			'Е' : '',    'Ж' : '',   'З' : '',    'И' : '',	'Й' : '',
			'К' : '',    'Л' : '',    'М' : '',    'Н' : '',    'О' : '',    
			'П' : '',    'Р' : '',    'С' : '',    'Т' : '',    'У' : '',
			'Ф' : '',    'Х' : '',    'Ц' : '',    'Ч' : '',   'Ш' : '',
			'Щ' : '',  	'Ь' : '',     'Ы' : '',    'Э' : '', 	'Ю' : '',
			'Я' : '',   '_' : '',
		},
		'alph' : [
			'А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы', 'Ъ', 'Э','Ю','Я','_',
			'А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы','Э','Ю','Я','_',
			'А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы', 'Ъ', 'Э','Ю','Я','_',
			'А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы', 'Ъ', 'Э','Ю','Я','_']
	}

	function countFrequency(text){
		let dictionary = [
			'А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы', 'Ъ', 'Э','Ю','Я','_'
		]
		let result = [
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
		]
		
		for (let j = 0; j <= 32; j++) {
			let count = 0
			for (let i = 0; i < text.length; i++) { 
				if (text[i] === dictionary[j]) {
					count++
				}
				if (i === text.length - 1) {
					result[j].value = (count / text.length).toFixed(3)
				}
			}	
		}

		return result
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
	
		for (let i = 98; i <= 130; i++) { 
			rightAnswer = rightAnswer + cipherData['alph'][i - shift]
		}
	
		return rightAnswer
	}

	function handleChange(event) {
		const prevState = [...values]
		prevState.find(item => item.name === event.target.name).value = event.target.value
		setValues(prevState)
	}

	function onSubmitWin() {
		let rightAnswer = getAnswer(cipherData['shift'])
		let userAnswer = values.map(item => item.value).join('').toUpperCase()

		if (userAnswer === rightAnswer) {
			setWin(true)
			setWinText('Вы правильно ввели код')
		} else {
			setWin(false)
			setWinText('Вы неправильно ввели код')
		}
	}

	function onSubmitPreWin() {
		let rightSNP = replaceLetters(`${surname}_${name}_${patronymic}`)

		if (rightSNP === snpVal.toUpperCase()) {
			setModalWin(true)
		}
	}

	return <>
		<Modal 
			title="Тезаурус"
			text={ fragmentOfText } 
			active={ modalActive } 
			setActive={ setModalActive } 
		/>
		<Modal 
			title="Поздравляем!"
			text={ `${surname} ${name} ${patronymic}` } 
			active={ modalWin } 
			setActive={ setModalWin } 
		/>
		<div className="exercise-box">
			<div className="exercise-box__body-text">
				<p className="text">
					Имеется некоторый закрытый (зашифрованный) текст и фраза этого текста. Известна вероятность появления символов алфавита.<br />
					Определив вероятность появления символов текста, найдите код алфавита текста, дешифрируйте заданную фразу и используя найденный код алфавита, зашифруйте свою фамилию (имя, отчество).</p>
			</div>
			<div className="exercise-box__body-text">
				<h2 className="subtitle">
					{ replaceLetters(phrase) }
				</h2>
			</div>
			<div className="exercise-box__body-text exercise-form">
				<h2 className="subtitle">
					Вероятность появления символов алфавита:
				</h2>
				{countFrequency(fragmentOfText).map(item => (
					<>
						<div key={ item.id } className="exercise-input">
							<label htmlFor={ item.name }>
								{ item.label }
							</label>
							<input 
								type="text"
								id={ item.id } 
								name={ item.name } 
								defaultValue={ item.value } 
								className="word-input" 
								placeholder="?"
								readOnly 
							/>
						</div>
					</>
				))}
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
				<div className="button-container">
					<input 
						type="button" 
						className="btn" 
						value="Ввести"
						onClick={onSubmitWin}  
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
					value={ phraseVal }
					onChange={event => setPhraseVal(event.target.value)}
					className="prewin-input" 
					disabled={ !win } 
				/>
				<input 
					type="button" 
					value="Ввести" 
					className="btn"
					onClick={() => (phrase === phraseVal.toUpperCase()) ? setTried(true) : null}
					disabled={ !win } 
				/>
			</form>
			<form action="#" method="POST" className="exercise-form exercise-form-prewin">
				<p className="text">Используя код алфавита, зашифруйте с его помошью свое ФИО:</p>
				<input 
					type="text" 
					name="name"
					className="prewin-input"
					value={snpVal}
					onChange={event => setSnpVal(event.target.value)} 
					disabled={ !tried } 
				/>
				<input 
					type="button" 
					value="Ввести" 
					className="btn"
					onClick={onSubmitPreWin}
					disabled={ !tried } 
				/>
			</form>
		</div>
	</>
}