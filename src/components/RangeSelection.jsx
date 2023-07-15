import React from "react";

function RangeSelection({ setTestState, getHandler, inputValues, setEquationCount, setCorrectAnswerCount, setEquationList, setEquationIndex }) {


    const handleSubmitRange = (e) => {
        e.preventDefault();
        const firstInput = parseInt(document.querySelector(".start-range").value);
        const secondInput = parseInt(document.querySelector(".end-range").value);

        // set minimum range to the lowest number
        const min = Math.min(firstInput, secondInput);
        const max = Math.max(firstInput, secondInput);

        setEquationCount(0);
        setCorrectAnswerCount(0);
        makeEquationList(min, max);
        setTestState("active");
    };

    const makeEquationList = (minNum, maxNum) => {

        const equationArr = [];
        // creates an array of equations within range
        for (let x = minNum; x <= maxNum; x++) {
            for (let y = minNum; y <= maxNum; y++) {
                let equation = [];
                equation.push(x, y);
                equationArr.push(equation);
            }
        }

        setEquationList(equationArr);
        setEquationIndex(Math.floor((Math.random() * equationArr.length)));
    }

    return (
        <section className="range">
            <h3 className="form-label">Choose Table Range:</h3>
            <form onSubmit={handleSubmitRange}>
                <div className="selection">
                    <label className='sr-only' htmlFor='start'>Start Range</label>
                    <input id='start' className="input start-range" onFocus={(e) => e.target.select()}
                        onChange={getHandler('first')}
                        value={inputValues.first}
                        type="text" size="2" maxLength={2} autoComplete="off" />

                    <p className="to">to</p>

                    <label className='sr-only' htmlFor='end'>End Range</label>
                    <input id='end' className="input end-range" onFocus={(e) => e.target.select()}
                        onChange={getHandler('last')}
                        value={inputValues.last} type="text" size="2" maxLength={2} autoComplete="off" />
                </div>
                <button className="button">Make Table</button>
            </form>
        </section>
    )
}

export default RangeSelection;
