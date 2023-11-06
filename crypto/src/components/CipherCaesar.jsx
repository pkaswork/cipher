export default function CipherCaesar({ variant }) {
	return <>
		<div className="exercise-box">
			<div className="exercise-box__body-text">
				<p className="text">Прочтите нижеприведённый текст, а затем найдите код его алфавита.</p>
			</div>
			<div className="exercise-box__body-text">
				<h2 className="text secret"></h2>
			</div>
			<form action="#" method="POST" className="exercise-form">
				<h3 className="subtitle win-text"></h3>
				<div className="exercise-input">
					<label htmlFor="a">А</label>
					<input type="text" id="a" name="a" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="b">Б</label>
					<input type="text" id="b" name="b" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="v">В</label>
					<input type="text" id="v" name="v" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="g">Г</label>
					<input type="text" id="g" name="g" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="d">Д</label>
					<input type="text" id="d" name="d" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="e">Е</label>
					<input type="text" id="e" name="e" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="zh">Ж</label>
					<input type="text" id="zh" name="zh" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="z">З</label>
					<input type="text" id="z" name="z" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="i">И</label>
					<input type="text" id="i" name="i" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="iq">Й</label>
					<input type="text" id="iq" name="iq" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="k">К</label>
					<input type="text" id="k" name="k" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="l">Л</label>
					<input type="text" id="l" name="l" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="m">М</label>
					<input type="text" id="m" name="m" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="n">Н</label>
					<input type="text" id="n" name="n" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="o">О</label>
					<input type="text" id="o" name="o" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="p">П</label>
					<input id="p" name="p" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="r">Р</label>
					<input type="text" id="r" name="r" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="s">С</label>
					<input type="text" id="s" name="s" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="t">Т</label>
					<input type="text" id="t" name="t" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="u">У</label>
					<input type="text" id="u" name="u" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="f">Ф</label>
					<input type="text" id="f" name="f" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="h">Х</label>
					<input type="text" id="h" name="h" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="c">Ц</label>
					<input type="text" id="c" name="c" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="ch">Ч</label>
					<input type="text" id="ch" name="ch" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="sh">Ш</label>
					<input type="text" id="sh" name="sh" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="shch">Щ</label>
					<input type="text" id="shch" name="shch" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="mb">Ь</label>
					<input type="text" id="mb" name="mb" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="bl">Ы</label>
					<input id="bl" name="bl" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="tb">Ъ</label>
					<input type="text" id="tb" name="tb" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="ae">Э</label>
					<input type="text" id="ae" name="ae" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="yu">Ю</label>
					<input type="text" id="yu" name="yu" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="ya">Я</label>
					<input type="text" id="ya" name="ya" className="word-input" placeholder="?" />
				</div>
				<div className="exercise-input">
					<label htmlFor="space">_</label>
					<input type="text" id="under" name="space" className="word-input" placeholder="?" />
				</div>
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