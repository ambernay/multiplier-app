import React from "react";

function Counter({ equationTotal, correctAnswerCount }) {

    return (
        <section className="counter-box">
            <div className="apple-wrapper">
                <h3 className="total">{correctAnswerCount}/{equationTotal}</h3>
            </div>
        </section>
    )
}

export default Counter;
