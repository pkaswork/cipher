import { useLocation } from 'react-router-dom'
import CipherCaesar from './CipherCaesar'
import GammingCode from './GammingCode'
import PermutationCipher from './PermutationCipher'
import TrisemiusCipher from './TrisemiusCipher'
import CipherDiffieHellman from './CipherDiffieHellman'
import Rsa from './rsa'

/* eslint-disable react/prop-types */
export default function Exercise() {
	const location = useLocation()
	const { from } = location.state
	const variant = from[0]
	const mode = from[1]

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
			return <CipherCaesar variant={ variant } />
		} else if (mode === 'gammingCode') {
			return <GammingCode variant={ variant } />
		} else if (mode === 'permutationCipher') {
			return <PermutationCipher variant={ variant } />
		} else if (mode === 'trisemiusCipher') {
			return <TrisemiusCipher variant={ variant } />
		} else if (mode === 'cipherDiffieHellman') {
			return <CipherDiffieHellman variant={ variant } />
		} else if (mode === 'rsa') {
			return <Rsa variant={ variant } />
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