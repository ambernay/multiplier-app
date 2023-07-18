import React, { useState } from "react";

function Retest({ setTestState, equationCount, correctAnswerCount, setEquationList, setEquationIndex, wrongAnswers, equationList }) {

    const [retestOptionClass, setRetestOptionClass] = useState("hidden");

    const handleRetestButtons = (e) => {
        e.preventDefault();
        setEquationList(wrongAnswers);
        setEquationIndex(Math.floor((Math.random() * (wrongAnswers.length - 1))));
        setTestState('active');
        console.log(wrongAnswers, equationList);
    }

    const showOptions = (e) => {
        setRetestOptionClass('visible');
    }

    return (
        <section className="retest-section">
            <h3>You got {Math.round((correctAnswerCount * 100) / equationCount)}%</h3>
            <form className="retest-container" onSubmit={handleRetestButtons}>
                <button type='button' className="retest-title" onClick={showOptions}>Restart Test?</button>
                <ul className={retestOptionClass}>
                    <li>
                        <button type='submit' className="retest-button">All Questions</button>
                    </li>
                    <li>
                        <button type='submit' className="retest-button">Wrong Answers</button>
                    </li>
                </ul>
            </form>
        </section>
    )
}

export default Retest;