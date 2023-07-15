import React, { useState } from "react";

function WorkArea({ setTestState, getHandler, inputValues, setInputValues, equationCount, setEquationCount, correctAnswerCount, setCorrectAnswerCount, equationList, setEquationList, equationIndex, setEquationIndex }) {

    const [answerComplete, setAnswerComplete] = useState(false);

    let firstNum = equationList[equationIndex][0];
    let secondNum = equationList[equationIndex][1];

    // #region answer validation
    const correctAnswer = firstNum * secondNum;
    // answer validation mark
    const [mark, setMark] = useState('✗');
    const [markId, setMarkId] = useState('');

    // #endregion answer validation

    // #region equation counter - on button click
    function getEquationCount() {
        const userAnswer = parseInt(document.querySelector(".answer-input").value);
        // add to total counter on submit
        setEquationCount(equationCount + 1);
        // add to correct counter only when correct
        if (userAnswer === correctAnswer) {
            setCorrectAnswerCount(correctAnswerCount + 1);
        }
    }
    // #endregion equation counter - on button click
    const [wrongAnswers, setWrongAnswers] = useState([]);

    const markAnswer = () => {
        // check answer and mark answer
        const userAnswer = parseInt(document.querySelector(".answer-input").value);

        if (userAnswer === correctAnswer) {
            setMark('✔︎');
            setMarkId('checkmark');

            // setWrongAnswers(wrongAnswers.filter(equation => equation !== equationList[equationIndex]));
            // console.log(wrongAnswers);
        }
        else {
            setMark('✗');
            setMarkId('x-mark');
            let wrongAnswer = [firstNum, secondNum];
            setWrongAnswers((prev) => [...prev, wrongAnswer]);
        }
    }

    const getNextQuestion = () => {
        // reenables and puts focus on input
        document.querySelector('#user-answer').disabled = false;
        document.querySelector('#user-answer').focus();

        // set new equation
        setEquationIndex(Math.floor((Math.random() * (equationList.length - 1))));

        setAnswerComplete(false);
        inputValues['answerInput'] = '';
        setInputValues(inputValues)
    };

    // #region handle submit
    const handleSubmitAnswer = (e) => {
        e.preventDefault();

        setAnswerComplete(true);
        // #region change button and checkmark visibility
        if (equationList.length > 0) {
            // disables input
            document.querySelector('#user-answer').disabled = true;

            // remove current equation from list
            equationList = equationList.filter(equation => equation !== equationList[equationIndex]);
            setEquationList(equationList);

            // check answer and mark answer
            markAnswer();

            const nextQuestion = setTimeout(getNextQuestion, 2000);
            return () => clearTimeout(getNextQuestion);
        }

        if (equationList.length === 0) {
            setTestState("retest");
            console.log('no numbers');
        }
        // resets input after "Next" button click
        document.querySelector(".answer-input").value = "";
    }
    // #endregion handle submit

    return (
        <section className="work-area">
            <form className="work-area-form" onSubmit={handleSubmitAnswer}>
                <h2 className="equation-text">{firstNum} x {secondNum} =
                    <label className='sr-only' htmlFor='user-answer'>your answer</label>
                    <input
                        id='user-answer'
                        className="input answer-input"
                        onChange={getHandler('answerInput')}
                        value={inputValues.answerInput} type="text" size="4" maxLength={4} autoComplete="off" />
                </h2>
                {/* add visibility-hidden to hide, while keeping position */}
                <button className={answerComplete ? " hidden answer-button button" : "answer-button button"}
                    onClick={(e) => { getEquationCount(e) }}>
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