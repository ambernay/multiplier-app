import React from "react";
// import Apple from "./public/images/chalk_apple.png";

function Timer(props) {

    const equationTotal = props.equationTotal;
    const correctAnswerTotal = props.correctAnswerCount

    return (
        <div className="timer-box">
            <h3 className="timer-text">Timer</h3>
            <div className="apple-wrapper">
                <img className="apple" src="../images/chalk_apple.png" alt="chalk apple" />
                <h3 className="total">{correctAnswerTotal}/{equationTotal}</h3>
            </div>
        </div>
    )
}

export default Timer;
