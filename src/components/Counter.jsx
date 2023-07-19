import React from "react";

function Counter({ equationCount, correctAnswerCount }) {

    return (
        <section className="counter-box">
            <div className="apple-wrapper">
                <h3 className="total">{correctAnswerCount} / {equationCount}</h3>
            </div>
        </section>
    )
}

export default Counter;
