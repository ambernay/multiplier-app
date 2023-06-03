import React from "react";
// import Apple from "./public/images/chalk_apple.png";

function Timer(props) {

    const equationTotal = props.equationTotal;
    const correctAnswerTotal = props.correctAnswerCount

    return (
        <section className="timer-section">
            <h3 className="timer-text">Timer</h3>
            <div className="apple-container">
                {/* <img className="apple" src="../images/chalk_apple.png" alt="chalk apple" /> */}
                <h3 className="total">{correctAnswerTotal}/{equationTotal}</h3>
            </div>
        </section>
    )
}

export default Timer;
