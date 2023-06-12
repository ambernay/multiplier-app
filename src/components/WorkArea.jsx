import React, { useState, useEffect } from "react";

function WorkArea({ equationCount, setEquationCount, correctAnswerCount, setCorrectAnswerCount, equationList, minNum, maxNum }) {

    const [buttonState, setbuttonState] = useState("Submit");

    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);

    // #region answer validation
    const correctAnswer = firstNum * secondNum;
    // answer validation mark
    const [mark, setMark] = useState('✗');
    const [markId, setMarkId] = useState('');
    const markVisibility = document.querySelector(".mark");
    // #endregion answer validation

    // #region set visibility for work area
    useEffect(() => {
        const workArea = document.querySelector(".work-area");
        console.log(equationList);
        if (equationList.length < 1) {
            workArea.style.visibility = "hidden";
        }
        else {

            let equationIndex = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

            setFirstNum(equationList[equationIndex][0]);
            setSecondNum(equationList[equationIndex][1]);

            workArea.style.visibility = "visible";
        }
    }, [minNum, maxNum, equationList]);

    // #endregion set visibility for work area

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
        // #endregion check answer and mark answer
        // #region change button and checkmark visibility
        if (buttonState === "Submit") {
            setbuttonState("Next");
            // show x or check mark
            markVisibility.style.visibility = "visible";
        }
        else if (buttonState === "Next") {
            setbuttonState("Submit");

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
                    <input className="input answer-input" type="text" size="4" maxLength={4} />
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