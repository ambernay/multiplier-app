import React, { useState } from "react";
import { TopFrame, Heading } from "./Heading";
import WorkArea from "./WorkArea";
import RangeSelection from "./RangeSelection";
import Counter from "./Counter";
import Footer from "./Footer";

function App() {

    const [firstNum, setFirstNum] = useState();
    const [secondNum, setSecondNum] = useState();

    const [equationCount, setEquationCount] = useState(0);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);



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
                equationCount={equationCount}
                setEquationCount={setEquationCount}
                correctAnswerCount={correctAnswerCount}
                setCorrectAnswerCount={setCorrectAnswerCount}
            />
            <RangeSelection
                setFirstNum={setFirstNum}
                setSecondNum={setSecondNum}
                // back to zero when setting a new range
                setEquationCount={setEquationCount}
                setCorrectAnswerCount={setCorrectAnswerCount}
            />
            <Counter
                equationTotal={equationCount}
                correctAnswerCount={correctAnswerCount}
            />
            <Footer />
        </div>
    )
}

export default App;