import React from "react";

function RangeSelection({ setFirstNum, setSecondNum, setEquationCount, setCorrectAnswerCount }) {

    const handleSubmitRange = (e) => {
        e.preventDefault();
        const firstInput = document.querySelector(".start-range").value;
        const secondInput = document.querySelector(".end-range").value;
        setFirstNum(firstInput);
        setSecondNum(secondInput);
        setEquationCount(0);
        setCorrectAnswerCount(0);
        // makeEquationArr(firstInput, secondInput);
    };

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
