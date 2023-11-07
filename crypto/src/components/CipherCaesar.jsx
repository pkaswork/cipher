import { useState } from 'react'

let arrayLetters = [
	{letter: 'a', rusLetter: 'А'},
	{letter: 'b', rusLetter: 'Б'},
	{letter: 'v', rusLetter: 'В'},
	{letter: 'g', rusLetter: 'Г'},
	{letter: 'd', rusLetter: 'Д'},
	{letter: 'e', rusLetter: 'Е'},
	{letter: 'zh', rusLetter: 'Ж'},
	{letter: 'z', rusLetter: 'З'},
	{letter: 'i', rusLetter: 'И'},
	{letter: 'iq', rusLetter: 'Й'},
	{letter: 'k', rusLetter: 'К'},
	{letter: 'l', rusLetter: 'Л'},
	{letter: 'm', rusLetter: 'М'},
	{letter: 'n', rusLetter: 'Н'},
	{letter: 'o', rusLetter: 'О'},
	{letter: 'p', rusLetter: 'П'},
	{letter: 'r', rusLetter: 'Р'},
	{letter: 's', rusLetter: 'С'},
	{letter: 't', rusLetter: 'Т'},
	{letter: 'u', rusLetter: 'У'},
	{letter: 'f', rusLetter: 'Ф'},
	{letter: 'h', rusLetter: 'Х'},
	{letter: 'c', rusLetter: 'Ц'},
	{letter: 'ch', rusLetter: 'Ч'},
	{letter: 'sh', rusLetter: 'Ш'},
	{letter: 'shch', rusLetter: 'Щ'},
	{letter: 'mb', rusLetter: 'Ь'},
	{letter: 'bl', rusLetter: 'Ы'},
	{letter: 'tb', rusLetter: 'Ъ'},
	{letter: 'ae', rusLetter: 'Э'},
	{letter: 'yu', rusLetter: 'Ю'},
	{letter: 'ya', rusLetter: 'Я'},
	{letter: 'space', rusLetter: '_'}
]

function ExerciseInput({ letter, rusLetter }) {
	const [letterState, setLetterState] = useState('')

	return <>
		<div className="exercise-input">
			<label htmlFor={ letter }>{rusLetter}</label>
			<input type="text" id={ letter } name={ letter } value={ letterState } onChange={event => setLetterState(event.target.value)} className="word-input" placeholder="?" />
		</div>
	</>
}

export default function CipherCaesar({ variant }) {
	const [tesarius, setTesarius] = useState('')
	const [fragmentOfText, setFragmentOfText] = useState('')
	const arrTesarius = [
		'НЕГДЕ_В_ТРИДЕВЯТОМ_ЦАРСТВЕ_В_ТРИДЕСЯТОМ_ГОСУДАРСТВЕ_ЖИЛ_БЫЛ_СЛАВНЫЙ_ЦАРЬ ДАДОН_С_МОЛОДУ_БЫЛ_ГРОЗЕН_ОН_И_СОСЕДЯМ_ТО_И_ДЕЛО_НАНОСИЛ_ОБИДЫ_СМЕЛО_НО_ПОД_СТАРОСТЬ_ЗАХОТЕЛ_ОТДОХНУТЬ_ОТ_РАТНЫХ_ДЕЛ_И_ПОКОЙ_СЕБЕ_УСТРОИТЬ_ТУТ_СОСЕДИ_БЕСПОКОИТЬ_СТАЛИ_СТАРОГО_ЦАРЯ_СТРАШНЫЙ_ВРЕД ЕМУ_ТВОРЯ',
		'ВОТ_МУДРЕЦ_ПЕРЕД_ДАДОНОМ_СТАЛ_И_ВЫНУЛ_ИЗ_МЕШКА_ЗОЛОТОГО_ПЕТУШКА_ПОСАДИ_ТЫ_ЭТУ_ПТИЦУ_МОЛВИЛ_ОН_ЦАРЮ_НА_СПИЦУ_ПЕТУШОК_МОЙ_ЗОЛОТОЙ_БУДЕТ_ВЕРНЫЙ_СТОРОЖ_ТВОЙ_КОЛЬ_КРУГОМ_ВСЕ_БУДЕТ_МИРНО_ТАК_СИДЕТЬ_ОН_БУДЕТ_СМИРНО_НО_ЛИШЬ_ЧУТЬ_СО_СТОРОНЫ_ОЖИДАТЬ_ТЕБЕ_ВОЙНЫ_ИЛЬ_НАБЕГА_СИЛЫ_БРАННОЙ',
		'ПЕТУШОК_С_ВЫСОКОЙ_СПИЦЫ_СТАЛ_СТЕРЕЧЬ_ЕГО_ГРАНИЦЫ_ЧУТЬ_ОПАСНОСТЬ_ГДЕ_ВИДНА_ВЕРНЫЙ_СТОРОЖ_КАК_СО_СНА_ШЕВЕЛЬНЕТСЯ_ВСТРЕПЕНЕТСЯ_К_ТОЙ_СТОРОНКЕ_ОБЕРНЕТСЯ_И_КРИЧИТ_КИРИ_КУ_КУ_ЦАРСТВУЙ_ЛЕЖА_НА_БОКУ_И_СОСЕДИ_ПРИСМИРЕЛИ_ВОЕВАТЬ_УЖЕ_НЕ_СМЕЛИ_ТАКОВОЙ_ИМ_ЦАРЬ_ДАДОН_ДАЛ_ОТПОР_СО_ВСЕХ_СТОРОН'
	]
	const arrFragmentsOfText = [
		'НО_ПОД_СТАРОСТЬ_ЗАХОТЕЛ_ОТДОХНУТЬ_ОТ_РАТНЫХ_ДЕЛ_И_ПОКОЙ_СЕБЕ_УСТРОИТЬ',
		'ТЫ_ЭТУ_ПТИЦУ_МОЛВИЛ_ОН_ЦАРЮ_НА_СПИЦУ_ПЕТУШОК_МОЙ_ЗОЛОТОЙ_БУДЕТ_ВЕРНЫЙ_СТОРОЖ_ТВОЙ',
		'ОПАСНОСТЬ_ГДЕ_ВИДНА_ВЕРНЫЙ_СТОРОЖ_КАК_СО_СНА_ШЕВЕЛЬНЕТСЯ_ВСТРЕПЕНЕТСЯ'
	]
	const arrOfTitles = [
		'Прочитайте нижеприведенный текст, а затем найдите код его алфавита. В качестве тезауруса используйте то обстоятельство, что текст составлен из двадцати первых строк произведения А. С. Пушкина "Сказка о Золотом Петушке".',
		'Прочитайте нижеприведенный текст, а затем найдите код его алфавита. В качестве тезауруса используйте то обстоятельство, что текст составлен из двадцати первых строк второго абзаца произведения А. С. Пушкина "Сказка о Золотом Петушке".',
		'Прочитайте нижеприведенный текст, а затем найдите код его алфавита. В качестве тезауруса используйте то обстоятельство, что текст составлен из двадцати первых строк третьего абзаца произведения А. С. Пушкина "Сказка о Золотом Петушке".'
	]
	
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
		'alph' : ['А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы','Э','Ю','Я','_','А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы','Э','Ю','Я','_'],
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

	return <>
		<div className="exercise-box">
			<div className="exercise-box__body-text">
				<p className="text">{arrOfTitles[0]}</p>
			</div>
			<div className="exercise-box__body-text">
				<h2 className="text secret">{replaceLetters(arrFragmentsOfText[0])}</h2>
			</div>
			<form action="#" method="POST" className="exercise-form">
				<h2 className="subtitle win-text">{cipherData['winText']}</h2>
				{arrayLetters.map(item => {
					return <ExerciseInput letter={ item.letter } rusLetter={ item.rusLetter } key={ item.letter } />
				})}
				<div className="button-container">
					<input type="submit" className="btn" value="Ввести" />
					<button className="btn tezaurus-btn">Тезариус</button>
				</div>
			</form>
			<form action="#" method="POST" className="exercise-form exercise-form-prewin">
				<p className="text">Используя полученный код (шифр), закодируйте с его помошью своё ФИО:</p>
				<input type="text" id="prewin" className="prewin-input" name="name" />
				<input type="submit" value="Ввести" className="btn prewin-input-submit" />
			</form>
		</div>
	</>
}