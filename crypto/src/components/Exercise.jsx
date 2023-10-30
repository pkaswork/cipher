/* eslint-disable react/prop-types */
export default function Exercise({ exersType }) {
	function showExercise() {
		if (exersType == 'cipherCeaser') {
			return <>
				<p>Шифр Цезаря</p>
			</>
		} else {
			return <>
				<p>Пока нет задания</p>
			</>
		}
	}
	return <>
		<div>
			Тут будет задание
			{showExercise()}
		</div>
	</>
}