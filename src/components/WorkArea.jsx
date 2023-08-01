import React, { useState, useRef } from "react";

function WorkArea({ setTestState, getHandler, inputValues, setInputValues, equationCount, setEquationCount, correctAnswerCount, setCorrectAnswerCount, equationList, setEquationList, equationIndex, setEquationIndex, setWrongAnswers }) {

    const answerInputRef = useRef(null);

    let currentQuestion = equationList[equationIndex];

    // hides "submit" button until new question is displayed
    const [answerComplete, setAnswerComplete] = useState(false);

    // answer validation mark
    const [mark, setMark] = useState('✗');
    const [markId, setMarkId] = useState('');

    const correctAnswer = currentQuestion[0] * currentQuestion[1];
    const userAnswer = parseInt(inputValues['answerInput']);
    const isCorrect = userAnswer === correctAnswer;

    // #endregion answer validation

    const markAnswer = () => {

        // check answer and mark answer


        // add to total counter on submit
        setEquationCount(equationCount + 1);

        if (isCorrect) {
            setMark('✔︎');
            setMarkId('checkmark');
            // add to correct counter only when correct
            setCorrectAnswerCount(correctAnswerCount + 1);
        }
        else {
            setMark('✗');
            setMarkId('x-mark');
            setWrongAnswers((prev) => [...prev, currentQuestion]);
        }
    }

    const getNextQuestion = () => {
        // reenables and puts focus on input
        answerInputRef.current.disabled = false;
        answerInputRef.current.focus();

        // remove current equation from list
        equationList = equationList.filter(equation => equation !== equationList[equationIndex]);
        setEquationList(equationList);

        // set new equation
        setEquationIndex(Math.floor((Math.random() * (equationList.length - 1))));

        if (equationList.length === 0) {
            setTestState("retest");
        }

        setAnswerComplete(false);
        // empty answer-input field
        setInputValues({ ...inputValues, 'answerInput': '' });
    };

    // #region handle submit
    const handleSubmitAnswer = (e) => {
        e.preventDefault();

        const answerInputField = document.querySelector('#user-answer');

        setAnswerComplete(true);

        if (equationList.length > 0) {
            // disables input
            answerInputField.disabled = true;

            // check answer and mark answer
            markAnswer();

            setTimeout(getNextQuestion, 1500);
        }
        // resets input
        // answerInputField.value = "";
    }
    // #endregion handle submit

    return (
        <section className="work-area">
            <form className="work-area-form" onSubmit={handleSubmitAnswer}>
                <div className="equation-text-container">
                    <h2 className="equation-text">{currentQuestion[0]} x {currentQuestion[1]} =
                    </h2>
                    {!isCorrect ?
                        <div className="answer-circle">
                            <h2 className="correct-answer">{correctAnswer}</h2>
                        </div>
                        : null}
                </div>
                <label className='sr-only' htmlFor='user-answer'>your answer</label>
                <input
                    id='user-answer'
                    className="input answer-input"
                    ref={answerInputRef}
                    onChange={getHandler('answerInput')}
                    value={inputValues.answerInput} type="text" size="4" maxLength={4} autoComplete="off" />

                {/* add visibility-hidden to hide, while keeping position */}
                <button className={answerComplete ? " hidden answer-button button" : "answer-button button"}>
                    Submit
                </button>
            </form>
            {
                answerComplete ?
                    <div id={markId} className="mark">{mark}</div>
                    : <div id={markId} className="mark">{mark}</div>
            }
        </section>
    )
}

export default WorkArea