import React, { useState } from "react";

function WorkArea({ setTestState, getHandler, inputValues, setInputValues, equationCount, setEquationCount, correctAnswerCount, setCorrectAnswerCount, equationList, setEquationList, equationIndex, setEquationIndex, setWrongAnswers }) {

    console.log(equationList, equationIndex);
    // let firstNum = equationList[equationIndex][0];
    // let secondNum = equationList[equationIndex][1];
    let currentQuestion = equationList[equationIndex];

    // hides "submit" button until new question is displayed
    const [answerComplete, setAnswerComplete] = useState(false);

    // answer validation mark
    const [mark, setMark] = useState('✗');
    const [markId, setMarkId] = useState('');

    // #endregion answer validation

    const markAnswer = () => {

        // check answer and mark answer
        const correctAnswer = currentQuestion[0] * currentQuestion[1];
        const userAnswer = parseInt(document.querySelector(".answer-input").value);

        // add to total counter on submit
        setEquationCount(equationCount + 1);

        if (userAnswer === correctAnswer) {
            setMark('✔︎');
            setMarkId('checkmark');
            // add to correct counter only when correct
            setCorrectAnswerCount(correctAnswerCount + 1);

            // setWrongAnswers(wrongAnswers.filter(equation => equation !== equationList[equationIndex]));
            // console.log(wrongAnswers);
        }
        else {
            setMark('✗');
            setMarkId('x-mark');
            setWrongAnswers((prev) => [...prev, currentQuestion]);
        }
    }

    const getNextQuestion = () => {
        // reenables and puts focus on input
        document.querySelector('#user-answer').disabled = false;
        document.querySelector('#user-answer').focus();

        // remove current equation from list
        equationList = equationList.filter(equation => equation !== equationList[equationIndex]);
        setEquationList(equationList);

        // set new equation
        setEquationIndex(Math.floor((Math.random() * (equationList.length - 1))));

        if (equationList.length === 0) {
            setTestState("retest");
            console.log('no numbers');
        }

        setAnswerComplete(false);
        inputValues['answerInput'] = '';
        setInputValues(inputValues)
    };

    // #region handle submit
    const handleSubmitAnswer = (e) => {
        e.preventDefault();

        setAnswerComplete(true);

        if (equationList.length > 0) {
            // disables input
            document.querySelector('#user-answer').disabled = true;

            // check answer and mark answer
            markAnswer();

            setTimeout(getNextQuestion, 2000);
        }
        // resets input
        document.querySelector(".answer-input").value = "";
    }
    // #endregion handle submit

    return (
        <section className="work-area">
            <form className="work-area-form" onSubmit={handleSubmitAnswer}>
                <h2 className="equation-text">{currentQuestion[0]} x {currentQuestion[1]} =
                    <label className='sr-only' htmlFor='user-answer'>your answer</label>
                    <input
                        id='user-answer'
                        className="input answer-input"
                        onChange={getHandler('answerInput')}
                        value={inputValues.answerInput} type="text" size="4" maxLength={4} autoComplete="off" />
                </h2>
                {/* add visibility-hidden to hide, while keeping position */}
                <button className={answerComplete ? " hidden answer-button button" : "answer-button button"}>
                    Submit
                </button>
            </form>
            {answerComplete ?
                <div id={markId} className="mark">{mark}</div>
                : <></>
            }
        </section>
    )
}

export default WorkArea