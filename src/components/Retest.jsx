import React, { useState } from "react";

function Retest({ setTestState, equationCount, correctAnswerCount, setEquationList, setEquationIndex, wrongAnswers, setWrongAnswers, makeEquationList }) {

    const [retestOptionClass, setRetestOptionClass] = useState("hidden");

    const handleWrongAnswerButton = (e) => {

        setEquationList(wrongAnswers);
        setEquationIndex(Math.floor((Math.random() * (wrongAnswers.length - 1))));
        setTestState('active');
        setWrongAnswers([]);
    }

    const handleAllQuestionButton = (e) => {
        setWrongAnswers([]);
        makeEquationList();
    }

    const showOptions = (e) => {
        if (wrongAnswers.length > 0) {
            setRetestOptionClass('visible');
        }
        else {
            handleAllQuestionButton(e);
        }
    }

    return (
        <section className="retest-section">
            <h3>You got {Math.round((correctAnswerCount * 100) / equationCount)}%</h3>
            <form className="retest-container" onSubmit={(e) => e.preventDefault()}>
                <button type='button' className="retest-title" onClick={showOptions}>Restart Test?</button>
                <ul className={retestOptionClass}>
                    <li>
                        <button type='submit' className="retest-button" onClick={handleAllQuestionButton}>All Questions</button>
                    </li>
                    <li>
                        <button type='click' className="retest-button"
                            onClick={handleWrongAnswerButton}>Wrong Answers</button>
                    </li>
                </ul>
            </form>
        </section>
    )
}

export default Retest;