import React from "react";

function Retest() {
    return (
        <section className="retest-section">
            <h3>You got x%</h3>
            <div className="retest-container">
                <h2 className="retest-title">Restart Test?</h2>
                <ul>
                    <li>All Questions</li>
                    <li>Wrong Answers</li>
                </ul>
            </div>
        </section>
    )
}

export default Retest;