import React, { useState } from "react";
import { TopFrame, Heading } from "./Heading";
import WorkArea from "./WorkArea";
import RangeSelection from "./RangeSelection";
import Counter from "./Counter";
import Footer from "./Footer";

function App() {

    const [minNum, setMinNum] = useState();
    const [maxNum, setMaxNum] = useState();

    const [equationCount, setEquationCount] = useState(0);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

    const [equationList, setEquationList] = useState([]);

    return (
        <div id="grid">
            <TopFrame />
            <Heading />
            <WorkArea
                minNum={minNum}
                maxNum={maxNum}
                equationCount={equationCount}
                setEquationCount={setEquationCount}
                correctAnswerCount={correctAnswerCount}
                setCorrectAnswerCount={setCorrectAnswerCount}
                equationList={equationList}
            />
            <RangeSelection
                minNum={minNum}
                setMinNum={setMinNum}
                maxNum={maxNum}
                setMaxNum={setMaxNum}
                // back to zero when setting a new range
                setEquationCount={setEquationCount}
                setCorrectAnswerCount={setCorrectAnswerCount}
                setEquationList={setEquationList}
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