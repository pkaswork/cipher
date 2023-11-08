import { useState } from 'react'

export default function ExerciseInput({ letter, rusLetter }) {
	const [letterState, setLetterState] = useState('')

	return <>
		<div className="exercise-input">
			<label htmlFor={ letter }>{rusLetter}</label>
			<input type="text" id={ letter } name={ letter } value={ letterState } onChange={event => setLetterState(event.target.value)} className="word-input" placeholder="?" />
		</div>
	</>
}