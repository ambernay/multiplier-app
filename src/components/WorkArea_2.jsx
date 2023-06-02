import React, { useState, useEffect } from "react";

function WorkArea(props) {
    
    const [buttonText, setButtonText] = useState("Submit");

    // #region set equation
    const [minNum, setMinNum] = useState();
    const [maxNum, setMaxNum] = useState()
    const [firstNum, setFirstNum] = useState(minNum);
    const [secondNum, setSecondNum] = useState(maxNum);
    
    useEffect(() => {
        setMinNum(parseInt(props.firstNumSelection < props.secondNumSelection ? props.firstNumSelection : props.secondNumSelection));
        setMaxNum(parseInt(props.firstNumSelection < props.secondNumSelection ? props.secondNumSelection : props.secondNumSelection));
        
        setFirstNum(Math.floor(Math.random() * parseInt(maxNum - minNum +1) + minNum));
        setSecondNum(Math.floor(Math.random() * parseInt(maxNum - minNum +1) + minNum));

    }, [props.firstNumSelection, props.secondNumSelection, maxNum, minNum]);
    // #endregion set equation
    
    // sets class to hide work area when parameters are not set
    const handleWorkArea = (Number.isNaN(minNum) || Number.isNaN(maxNum)) ? "hidden" : "work-area";
    
    // #region answer validation
    
    const correctAnswer = firstNum * secondNum;
    // answer validation mark
    const [mark, setMark] = useState('✗');
    const [markId, setMarkId] = useState('');
    var markVisibility = document.querySelector(".mark");
    // #endregion answer validation

    // #region equation counter - on button click
    function getEquationCount(e){
        const userAnswer = parseInt(document.querySelector(".answer-input").value);
        buttonText==="Submit" && props.equationCounter(e); 
        userAnswer === correctAnswer && props.correctAnswerCount(e)
    }
    // #endregion equation counter - on button click

    // #region handle submit
    const handleSubmitAnswer = (e) => {
        e.preventDefault();
        // #region check answer and mark answer
        const userAnswer = parseInt(document.querySelector(".answer-input").value);

        if(userAnswer === correctAnswer) {
            setMark('✔︎');
            setMarkId('checkmark');
        }
        else {
            setMark('✗');
            setMarkId('x-mark');
        }
        // #endregion check answer and mark answer
        // #region change button and checkmark visibility
        if(buttonText === "Submit") {
            setButtonText("Next");
            // show x or check mark 
            markVisibility.style.visibility = "visible";
        }
        else if(buttonText === "Next") {
            setButtonText("Submit");
            setFirstNum(Math.floor(Math.random() * parseInt(maxNum - minNum +1) + minNum));
            setSecondNum(Math.floor(Math.random() * parseInt(maxNum - minNum +1) + minNum));
            // resets input after "Next" button click
            document.querySelector(".answer-input").value = "";
            // hide x and check mark
            markVisibility.style.visibility = "hidden";
        }
        // #endregion change button and checkmark visibility
    }
    // #endregion handle submit
    
    return(
        <div className={handleWorkArea} >
            <form className="work-area-form" onSubmit={handleSubmitAnswer}>
                <h2 className="equation-text">{firstNum} x {secondNum} =
                    <input className="input answer-input" type="text" size="4" maxLength={4}/>
                </h2>
                <button className="answer-button" 
                    onClick={(e) => {getEquationCount(e)}}>
                    {buttonText}
                </button>
            </form>
            <div id={markId} className="mark">{mark}</div>
        </div>
    )
}

export default WorkArea