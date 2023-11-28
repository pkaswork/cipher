import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import eulerImage from '../../../assets/images/euler.jpg';
import findDImage from '../../../assets/images/findd.jpg';
import Scorm from '../../../scorm';

const variants = [
	[5, 7], [5, 11], [5, 13], [5, 17], [5, 19], [37, 11],
   [43, 7], [47, 3], [53, 2], [61, 29], [67, 13], [73, 11],
   [83, 5], [89, 3], [97, 2], [103, 7], [109, 13], [113, 17],
   [127, 31], [131, 29], [137, 19], [139, 13], [149, 17], [151, 13],
   [157, 7], [163, 13], [167, 19], [173, 29], [179, 17], [181, 13],
   [4, 7], [6, 11], [7, 13], [1, 17], [9, 19], [3, 11],
   [3, 7], [57, 3], [51, 2], [11, 29], [6, 13], [3, 11],
   [8, 5], [9, 3], [7, 2], [13, 7], [19, 13], [11, 17],
   [12, 31], [13, 29], [13, 19], [13, 13], [14, 17], [15, 13],
   [15, 7], [13, 13], [17, 19], [3, 29], [1, 17], [8, 13],
   [7, 13], [7, 11], [3, 5], [9, 3], [7, 2], [13, 7], [9, 13], [1, 17],
   [1, 31], [1, 29], [1, 19], [1, 13], [1, 17], [5, 13],
   [1, 7], [3, 13], [7, 19], [73, 29], [17, 17], [18, 13]
];
const eValues = [
	5, 3, 5, 3, 5, 4, 1, 2, 1, 62, 2, 25, 26, 7, 8, 38, 69, 88, 85, 44, 31, 45, 55, 51, 50, 37, 17, 54, 66, 42, 5, 3, 5, 3, 5, 4, 1, 2, 1, 62, 2, 25, 26, 7, 8, 38, 69, 88, 85, 44, 31, 45, 55, 51, 50, 37, 17, 54, 66, 42, 7, 8, 38, 69, 88, 85, 44, 31, 45, 55, 7, 8, 38, 69, 88, 85, 44, 31, 45, 55
];
const variantsSub = [
	[3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [43, 7], [47, 3], [53, 2], [61, 29], [67, 13], [73, 11], [83, 5], [89, 3], [97, 2], [103, 7], [109, 13], [113, 17], [127, 31], [131, 29], [137, 19], [139, 13], [149, 17], [151, 13], [157, 7], [163, 13], [167, 19], [173, 29], [179, 17], [181, 13], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [43, 7], [47, 3], [53, 2], [61, 29], [67, 13], [73, 11], [83, 5], [89, 3], [97, 2], [103, 7], [109, 13], [113, 17], [127, 31], [131, 29], [137, 19], [139, 13], [149, 17], [151, 13], [157, 7], [163, 13], [167, 19], [173, 29], [179, 17], [181, 13], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293], [3089, 5293]
];
const openKeys = [
	Math.floor(Math.random() * (2000 - 100 + 1)) + 100, Math.floor(Math.random() * (2000 - 100 + 1)) + 100
];

function Rsa({ surname, name, variant }) {
	const [secondActive, setSecondActive] = useState(false);
	const [thirdActive, setThirdActive] = useState(false);
	const [nValue, setNValue] = useState('');
	const [fnValue, setFnValue] = useState('');
	const [dValue, setDValue] = useState('');
	const [signValue, setSignValue] = useState('');
	const [cryptedValue, setCryptedValue] = useState('')
	const [keyValue, setKeyValue] = useState('');
	const [nWin, setNWin] = useState(false);
	const [fnWin, setFnWin] = useState(false);
	const [dWin, setDWin] = useState(false);
	const [signWin, setSignWin] = useState(false);
	const [cryptedWin, setCryptedWin] = useState(false);
	const [modalActive, setModalActive] = useState(false);
	const firstPrime = variants[+variant - 1][0];  				// получаем числа из массива variants
	const secondPrime = variants[+variant - 1][1]; 				// 
	const multiplyPrime = firstPrime * secondPrime; 			// произведение простых чисел
	const eulerPhi = (firstPrime - 1) * (secondPrime - 1); 	// значение формулы эйлера
	const e = eValues[variant - 1];									// значение е для поиска d
	const selectedVariantSub = variantsSub[+variant - 1];		// получаем числа абонента из массива variantsSyb
	const subFirstKey = selectedVariantSub[0];					// Открытый ключ
	const subSecondKey = selectedVariantSub[1];					//	

	function getFirstStep() {
		return (
			<>
				<div className="exercise-box__body-text">
					<p className="text">
						Игроку даются два случайных простых числа. Найдите произведение и функцию Эйлера. 
						<br />
						Первое число <b>p = {firstPrime}</b>
						<br />
						Второе число <b>q = {secondPrime}</b>
					</p>
				</div>
				<form action="#" method="POST" className="exercise-form exercise-form-prewin">
					<h2 className="subtitle">Введите произведение чисел n</h2>
					<input 
						type="text" 
						value={ nValue } 
						onChange={e => setNValue(e.target.value)} 
						className="prewin-input" 
						name="nvalue" 
					/>
					<input 
						type="button" 
						value="Ввести" 
						onClick={() => (nValue == multiplyPrime) ? setNWin(true) : setNWin(false)} 
						className="btn" 
					/>
				</form>
				<form action="#" method="POST" className="exercise-form exercise-form-prewin">
					<h2 className="subtitle">Введите функцию Эйлера f(n)</h2>
					<img src={eulerImage} alt="euler" className="exercise-form-img" />
					<input 
						type="text" 
						value={ fnValue } 
						onChange={e => setFnValue(e.target.value)} 
						className="prewin-input" 
						name="nvalue"
						disabled={ !nWin } 
					/>
					<input 
						type="button" 
						value="Ввести" 
						onClick={() => (fnValue == eulerPhi) ? setFnWin(true) : setFnWin(false)} 
						className="btn"
						disabled={ !nWin } 
					/>
				</form>
				<form action="#" method="POST" className="exercise-form exercise-form-prewin">
					<h2 className="subtitle">Введите вашу догадку для значения d при e = {e}</h2>
					<img src={findDImage} alt="findD" className="exercise-form-img" />
					<input 
						type="text" 
						value={ dValue } 
						onChange={e => setDValue(e.target.value)} 
						className="prewin-input" 
						name="dvalue"
						disabled={ !fnWin }  
					/>
					<div className="button-container">
						<input 
							type="button" 
							value="Ввести" 
							onClick={() => (+dValue * e % eulerPhi === 1) ? setDWin(true) : setDWin(false)} 
							className="btn"
							disabled={ !fnWin }  
						/>
						<button 
							type="button" 
							className="btn btn-next" 
							onClick={() => setSecondActive(true)} 
							disabled={ !dWin }
						>
							Дальше
						</button>
					</div>
				</form>
			</>
		);
	}

	function getSecondStep() {
		const SignV = (+variant) ** e % multiplyPrime;			// подпись
		const cipherValue = Number(BigInt(+variant) ** BigInt(subFirstKey) % BigInt(subSecondKey)); // зашифрованное значение

		return (
			<>
				<div className="exercise-box__body-text">
					<p className="text">
						Ваш секретный ключ <b>e = {e}</b> 
						<br />
						Ваш открытый ключ <b>n = {multiplyPrime}</b>
						<br />
						В вашем справочнике имеется некоторый абонент 007, имеющий открытый ключ <b>d = {subFirstKey}</b>, <b>n = {subSecondKey}</b>.
					</p>
				</div>
				<form action="#" method="POST" className="exercise-form exercise-form-prewin">
					<h2 className="subtitle">Подпишите и отправьте абоненту 007 Ваш номер варианта {variant}</h2>
					<input 
						type="text" 
						value={ signValue } 
						onChange={e => setSignValue(e.target.value)} 
						className="prewin-input" 
						name="signvalue" 
						disabled={ !dWin }  
					/>
					<input 
						type="button" 
						value="Ввести" 
						onClick={() => (signValue == SignV) ? setSignWin(true) : setSignWin(false)} 
						className="btn"
						disabled={ !dWin }  
					/>
				</form>
				<form action="#" method="POST" className="exercise-form exercise-form-prewin">
					<h2 className="subtitle">Зашифруйте и отправьте абоненту 007 Ваш номер варианта {variant}</h2>
					<input 
						type="text" 
						value={ cryptedValue } 
						onChange={e => setCryptedValue(e.target.value)} 
						className="prewin-input" 
						name="cryptedvalue" 
						disabled={ !signWin }  
					/>
					<div className="button-container">
						<input 
							type="button" 
							value="Ввести" 
							onClick={() => (cryptedValue == cipherValue) ? setCryptedWin(true) : setCryptedWin(false)} 
							className="btn"
							disabled={ !signWin }  
						/>
						<button 
							type="button" 
							className="btn btn-next" 
							onClick={() => setThirdActive(true)} 
							disabled={ !cryptedWin }
						>
							Дальше
						</button>
					</div>
				</form>
			</>
		);
	}

	function getThirdStep() {
		const keyOne = openKeys[0]; // первый открытый ключ
		const keyTwo = openKeys[1]; // второй открытый ключ
		const finalAnswer = Number(Number(BigInt(keyOne) ** BigInt(subFirstKey) % BigInt(subSecondKey)) + '' + Number(BigInt(keyTwo) ** BigInt(subFirstKey) % BigInt(subSecondKey)));  // результат
		
		return (
			<>
				<div className="exercise-box__body-text">
					<p className="text">
						Открытый ключ 007 <b>d = {subFirstKey}</b> 
						<br />
						Второй открытый ключ 007 <b>n = {subSecondKey}</b>
						<br />
						Вы установили защищенный обмен информацией с удаленным абонентом сети 007. Абонент 007 посылает Вам в подписанном виде результирующий код выполненной Лабораторной работы №25: K1 = {keyOne} | K2 = {keyTwo}
					</p>
				</div>
				<form action="#" method="POST" className="exercise-form exercise-form-prewin">
					<h2 className="subtitle">Расшифруйте код k и используйте его для выполнения Лабароторной работы №26</h2>
					<input 
						type="text" 
						value={ keyValue } 
						onChange={e => setKeyValue(e.target.value)} 
						className="prewin-input" 
						name="keyvalue" 
						disabled={ !cryptedWin }  
					/>
					<input 
						type="button" 
						value="Ввести" 
						onClick={
							() => {
								if (keyValue == finalAnswer) {
									setModalActive(true);
									Scorm.calculateScore(100);
									Scorm.finish();
								}
							}
						} 
						className="btn"
						disabled={ !cryptedWin }  
					/>
				</form>
			</>
		);
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
			{
				!secondActive ?
				getFirstStep()
				: null
			}
			{
				(secondActive && !thirdActive) ?
				getSecondStep()
				: null
			}
			{
				thirdActive ?
				getThirdStep()
				: null
			}
		</div>
	</>
	);
}

export default Rsa;