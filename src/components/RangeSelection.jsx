import React from "react";
// import React, { useState } from "react";

function RangeSelection({ minNum, maxNum, setMinNum, setMaxNum, setEquationCount, setCorrectAnswerCount, setEquationList }) {


    const handleSubmitRange = (e) => {
        e.preventDefault();
        const firstInput = parseInt(document.querySelector(".start-range").value);
        const secondInput = parseInt(document.querySelector(".end-range").value);

        // set minimum range to the lowest number
        firstInput < secondInput ? setMinNum(firstInput) : setMinNum(secondInput);
        // set max range to highest number
        firstInput < secondInput ? setMaxNum(secondInput) : setMaxNum(firstInput)

        setEquationCount(0);
        setCorrectAnswerCount(0);

        makeEquationList()
    };


    const makeEquationList = () => {
        const equationArr = [];

        for (let x = minNum; x <= maxNum; x++) {
            for (let y = minNum; y <= maxNum; y++) {
                let equation = [];
                equation.push(x, y);
                equationArr.push(equation);
            }
            setEquationList(equationArr);
        }
    }

    return (
        <div className="range">
            <h3 className="form-label">Choose Table Range:</h3>
            <form onSubmit={handleSubmitRange}>
                <div className="selection">
                    <input className="input start-range" type="text" size="2" maxLength={2} />
                    <p className="to">to</p>
                    <input className="input end-range" type="text" size="2" maxLength={2} />
                </div>
                <button>Make Table</button>
            </form>
        </div>
    )
}

export default RangeSelection;
