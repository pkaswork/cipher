import { useLocation } from 'react-router-dom'
import CipherCaesar from './exercises/CipherCaesar'
import СipherCaesarFrequency from './exercises/СipherCaesarFrequency'
import GammingCode from './exercises/GammingCode'
import PermutationCipher from './exercises/PermutationCipher'
import TrisemiusCipher from './exercises/TrisemiusCipher'
import CipherDiffieHellman from './exercises/CipherDiffieHellman'
import Rsa from './exercises/rsa'

/* eslint-disable react/prop-types */
export default function Exercise() {
	const location = useLocation()
	const { from } = location.state
	const surname = from[0]
	const name = from[1]
	const patronymic = from[2]
	const variant = from[3]
	const mode = from[4]

	function getName() {
		if (mode === 'cipherCaesar') {
			return 'Шифр Цезаря'
		} else if (mode === 'gammingCode') {
			return 'Шифр Гаммирования'
		} else if (mode === 'permutationCipher') {
			return 'Шифр перестановки'
		} else if (mode === 'trisemusCipher') {
			return 'Шифр Трисемуса'
		} else if (mode === 'cipherDiffieHellman') {
			return 'Шифр Диффи-Хеллмана'
		} else if (mode === 'rsa') {
			return 'RSA'
		}
	}

	function getLayout() {
		if (mode === 'cipherCaesar') {
			return <CipherCaesar surname={surname} name={name} patronymic={patronymic} variant={ variant } />
		} else if (mode === 'cipherCaesarFrequency') {
			return <СipherCaesarFrequency surname={surname} name={name} patronymic={patronymic} variant={ variant } />
		} else if (mode === 'gammingCode') {
			return <GammingCode surname={surname} name={name} patronymic={patronymic} variant={ variant } />
		} else if (mode === 'permutationCipher') {
			return <PermutationCipher surname={surname} name={name} patronymic={patronymic} variant={ variant } />
		} else if (mode === 'trisemiusCipher') {
			return <TrisemiusCipher surname={surname} name={name} patronymic={patronymic} variant={ variant } />
		} else if (mode === 'cipherDiffieHellman') {
			return <CipherDiffieHellman surname={surname} name={name} patronymic={patronymic} variant={ variant } />
		} else if (mode === 'rsa') {
			return <Rsa surname={surname} name={name} patronymic={patronymic} variant={ variant } />
		}
	}
	
	return <>
		<section className="exercise exercise-page">
			<div className="container">
				<h1 className="title">
					Задание варианта: #<span className="variant-span">{ variant }</span>
					<br />
					<span className="task-span">{ getName() }</span>
				</h1>
				{ getLayout() }
			</div>
		</section>
	</>
}