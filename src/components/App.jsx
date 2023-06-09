import React, { useState } from "react";
import { TopFrame, Heading } from "./Heading";
import WorkArea from "./WorkArea";
import RangeSelection from "./RangeSelection";
import Timer from "./Timer";
import Footer from "./Footer";

function App() {

    const [firstNum, setFirstNum] = useState();
    const [secondNum, setSecondNum] = useState();

    const [equationCount, setEquationCount] = useState(0);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

    const handleSubmitRange = (e) => {
        e.preventDefault();
        const firstInput = document.querySelector(".start-range").value;
        const secondInput = document.querySelector(".end-range").value;
        setFirstNum(firstInput);
        setSecondNum(secondInput);
        // makeEquationArr(firstInput, secondInput);
    };

    // function makeEquationArr(firstInput, secondInput) {
    //     const equationArr = [];
    //     console.log(firstInput, secondInput)
    //     for (firstInput; firstInput < secondInput; firstNum+1){
    //         let newArr = [];
    //         newArr.push(firstNum);
    //         console.log(newArr);
    //     }
    // }

    return (
        <div id="grid">
            <TopFrame />
            <Heading />
            <WorkArea
                firstNumSelection={firstNum}
                secondNumSelection={secondNum}
                equationCounter={(e) => { setEquationCount(equationCount + 1) }}
                correctAnswerCount={(e) => { setCorrectAnswerCount(correctAnswerCount + 1) }}
            />
            <RangeSelection
                handleSubmitRange={handleSubmitRange}
            />
            <Timer
                equationTotal={equationCount}
                correctAnswerCount={correctAnswerCount}
            />
            <Footer />
        </div>
    )
}

export default App;