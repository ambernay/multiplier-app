import React from "react";
import Apple from "../images/chalk_apple.png";

function Timer(props) {

    const equationTotal = props.equationTotal;
    const correctAnswerTotal = props.correctAnswerCount

    return (
        <section className="timer-box">
            <h3 className="timer-text">Timer</h3>
            <div className="apple-wrapper">
                <h3 className="total">{correctAnswerTotal}/{equationTotal}</h3>
            </div>
        </section>
    )
}

export default Timer;
