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
    const markVisibility = document.querySelector(".mark");
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

    // #region handle submit
    const handleSubmitAnswer = (e) => {
        e.preventDefault();

        // #region change button and checkmark visibility
        if (buttonState === "Submit") {

            // #region check answer and mark answer
            const userAnswer = parseInt(document.querySelector(".answer-input").value);

            if (userAnswer === correctAnswer) {
                setMark('✔︎');
                setMarkId('checkmark');
            }
            else {
                setMark('✗');
                setMarkId('x-mark');
            }
            // show x or check mark
            markVisibility.style.visibility = "visible";
            // #endregion check answer and mark answer
            setbuttonState("Next");
        }
        else if (buttonState === "Next") {
            if (equationList.length > 0) {
                console.log(equationList, equationIndex);
                setEquationList(equationList.filter(equation => equation !== equationList[equationIndex]));
                console.log(equationList, equationIndex);
                setEquationIndex(Math.floor((Math.random() * equationList.length)));
                setbuttonState("Submit");
            }
            else {
                console.log('no numbers');
            }


            // resets input after "Next" button click
            document.querySelector(".answer-input").value = "";
            // hide x and check mark
            markVisibility.style.visibility = "hidden";
        }
        // #endregion change button and checkmark visibility
    }
    // #endregion handle submit

    return (
        <div className="work-area">
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
            <div id={markId} className="mark">{mark}</div>
        </div>
    )
}

export default WorkArea