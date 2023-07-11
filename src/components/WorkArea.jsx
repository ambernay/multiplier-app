import React, { useState } from "react";

function WorkArea({ equationCount, setEquationCount, correctAnswerCount, setCorrectAnswerCount, equationList, setEquationList, equationIndex, setEquationIndex }) {

    const [buttonState, setbuttonState] = useState("Submit");

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
        if (buttonState === "Submit") {
            setEquationCount(equationCount + 1);
            // add to correct counter only when correct
            if (userAnswer === correctAnswer) {
                setCorrectAnswerCount(correctAnswerCount + 1);
            }
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
            console.log(wrongAnswer);
            console.log(wrongAnswers);
        }
    }

    // #region handle submit
    const handleSubmitAnswer = (e) => {
        e.preventDefault();

        // #region change button and checkmark visibility
        if (buttonState === "Submit") {
            // disables input
            document.querySelector('#user-answer').disabled = true;
            // check answer and mark answer
            markAnswer();
            setbuttonState("Next");
        }
        else if (buttonState === "Next") {

            if (equationList.length > 0) {
                // reenables and puts focus on input
                document.querySelector('#user-answer').disabled = false;
                document.querySelector('#user-answer').focus();
                // remove current equation from list
                setEquationList(equationList.filter(equation => equation !== equationList[equationIndex]));

                // get new equation
                setEquationIndex(Math.floor((Math.random() * (equationList.length - 1))));
                setbuttonState("Submit");
            }
            else {
                console.log('no numbers');
            }
            // resets input after "Next" button click
            document.querySelector(".answer-input").value = "";
        }
    }
    // #endregion handle submit

    return (
        <section className="work-area">
            <form className="work-area-form" onSubmit={handleSubmitAnswer}>
                <h2 className="equation-text">{firstNum} x {secondNum} =
                    <label className='sr-only' htmlFor='user-answer'>your answer</label>
                    <input id='user-answer' className="input answer-input" type="text" size="4" maxLength={4} autoComplete="off" />
                </h2>
                <button className="answer-button"
                    onClick={(e) => { getEquationCount(e) }}>
                    {buttonState}
                </button>
            </form>
            {buttonState === "Next" ?
                <div id={markId} className="mark">{mark}</div>
                : <></>
            }
        </section>
    )
}

export default WorkArea