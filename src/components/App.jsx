import React, { useState } from "react";
import { TopFrame, Heading } from "./Heading";
import WorkArea from "./WorkArea";
import Retest from './Retest';
import RangeSelection from "./RangeSelection";
import Counter from "./Counter";
import Footer from "./Footer";

function App() {

    const [testState, setTestState] = useState("initial");

    const [inputValues, setInputValues] = useState({ first: '', last: '', answerInput: '' });

    const getHandler = (name) => {
        return (e) => {
            setInputValues({ ...inputValues, [name]: e.target.value });
        }
    }

    const [equationCount, setEquationCount] = useState(0);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

    const [equationList, setEquationList] = useState([]);
    const [equationIndex, setEquationIndex] = useState();

    return (
        <div id="grid">
            <TopFrame />
            <main>
                <Heading />
                {testState === "active" ?
                    <WorkArea
                        setTestState={setTestState}
                        getHandler={getHandler}
                        inputValues={inputValues}
                        setInputValues={setInputValues}
                        equationCount={equationCount}
                        setEquationCount={setEquationCount}
                        correctAnswerCount={correctAnswerCount}
                        setCorrectAnswerCount={setCorrectAnswerCount}
                        equationList={equationList}
                        setEquationList={setEquationList}
                        equationIndex={equationIndex}
                        setEquationIndex={setEquationIndex}
                    />
                    : testState === "retest" ? <Retest />
                        : null
                }
                <RangeSelection
                    setTestState={setTestState}
                    getHandler={getHandler}
                    inputValues={inputValues}
                    setInputValues={setInputValues}
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