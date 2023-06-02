import React, { useState, useEffect, useRef } from "react";

function WorkArea(props) {
    
    const [buttonText, setButtonText] = useState("Submit");
    // #region set equation
    const minNum = useRef();
    const maxNum = useRef();
    const [firstNum, setFirstNum] = useState(minNum.current);
    const [secondNum, setSecondNum] = useState(maxNum.current);
    // const [equationArr, setEquationArr] = useState([]);
    const equationArr = [];

    useEffect(() => {
        minNum.current = parseInt(props.firstNumSelection < props.secondNumSelection ? props.firstNumSelection : props.secondNumSelection);
        maxNum.current = parseInt(props.firstNumSelection < props.secondNumSelection ? props.secondNumSelection : props.firstNumSelection);
        
        setFirstNum(Math.floor(Math.random() * parseInt(maxNum.current - minNum.current +1) + minNum.current));
        setSecondNum(Math.floor(Math.random() * parseInt(maxNum.current - minNum.current +1) + minNum.current));

    }, [props.firstNumSelection, props.secondNumSelection, maxNum.current, minNum.current]);
    // #endregion set equation
    
    // #region set visibility for work area
    useEffect(() => {

        const workArea = document.querySelector(".work-area");

        if(Number.isNaN(minNum.current) || Number.isNaN(maxNum.current)){
            workArea.style.visibility = "hidden";
            console.log(workArea.style.visibility);
        }
        else{
            workArea.style.visibility = "visible";
            console.log(workArea.style.visibility);
        }
    }, [minNum.current, maxNum.current])
    // #endregion set visibility for work area
    
    // #region answer validation
    
    const correctAnswer = firstNum * secondNum;
    // answer validation mark
    const [mark, setMark] = useState('✗');
    const [markId, setMarkId] = useState('');
    const markVisibility = document.querySelector(".mark");
    // #endregion answer validation

    // #region equation counter - on button click
    function getEquationCount(e){
        const userAnswer = parseInt(document.querySelector(".answer-input").value);
        // add to total counter on submit
        if (buttonText==="Submit") {
            props.equationCounter(e);
            // add to correct counter only when correct
            if (userAnswer === correctAnswer) {
                props.correctAnswerCount(e);
            }
        } 
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
            setFirstNum(Math.floor(Math.random() * parseInt(maxNum.current - minNum.current +1) + minNum.current));
            setSecondNum(Math.floor(Math.random() * parseInt(maxNum.current - minNum.current +1) + minNum.current));
            // resets input after "Next" button click
            document.querySelector(".answer-input").value = "";
            // hide x and check mark
            markVisibility.style.visibility = "hidden";
        }
        // #endregion change button and checkmark visibility
    }
    // #endregion handle submit

    return(
        <div className="work-area" onVisibilityChange={console.log('changed')} >
            <form className="work-area-form"  onSubmit={handleSubmitAnswer}>
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