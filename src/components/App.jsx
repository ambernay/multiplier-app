import React, { useState } from "react";
import { TopFrame, Heading } from "./Heading";
import WorkArea from "./WorkArea";
import Restest from './Retest';
import RangeSelection from "./RangeSelection";
import Counter from "./Counter";
import Footer from "./Footer";

function App() {

    const [testIsActive, setTestIsActive] = useState(false);

    const [minNum, setMinNum] = useState();
    const [maxNum, setMaxNum] = useState();

    const [equationCount, setEquationCount] = useState(0);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

    const [equationList, setEquationList] = useState([]);
    const [equationIndex, setEquationIndex] = useState();

    return (
        <div id="grid">
            <TopFrame />
            <main>
                <Heading />
                {equationList.length > 0 ?
                    <WorkArea
                        equationCount={equationCount}
                        setEquationCount={setEquationCount}
                        correctAnswerCount={correctAnswerCount}
                        setCorrectAnswerCount={setCorrectAnswerCount}
                        equationList={equationList}
                        setEquationList={setEquationList}
                        equationIndex={equationIndex}
                        setEquationIndex={setEquationIndex}
                    />
                    : <Restest />
                }
                <RangeSelection
                    minNum={minNum}
                    setMinNum={setMinNum}
                    maxNum={maxNum}
                    setMaxNum={setMaxNum}
                    // back to zero when setting a new range
                    setEquationCount={setEquationCount}
                    setCorrectAnswerCount={setCorrectAnswerCount}
                    equationList={equationList}
                    setEquationList={setEquationList}
                    setEquationIndex={setEquationIndex}
                    equationIndex={equationIndex}
                />
                <Counter
                    equationTotal={equationCount}
                    correctAnswerCount={correctAnswerCount}
                />
            </main>
            <Footer />
        </div>
    )
}

export default App;