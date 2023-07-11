import React from "react";

function Retest() {

    const handleRetestButtons = (e) => {
        e.preventDefault();
    }

    return (
        <section className="retest-section">
            <h3>You got x%</h3>
            <form className="retest-container" onSubmit={handleRetestButtons}>
                <h2 className="retest-title">Restart Test?</h2>
                <ul>
                    <li>
                        <button className="retest-button">All Questions</button>
                    </li>
                    <li>
                        <button className="retest-button">Wrong Answers</button>
                    </li>
                </ul>
            </form>
        </section>
    )
}

export default Retest;