import React, { useState, useEffect } from "react";
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
    const [equationIndex, setEquationIndex] = useState(0);

    const [wrongAnswers, setWrongAnswers] = useState([]);

    // reset counter at beginning of every test
    useEffect(() => {
        if (testState === 'active') {
            setEquationCount(0);
            setCorrectAnswerCount(0);
            document.querySelector('#user-answer').focus();
        }

    }, [testState, setTestState, setEquationCount, setCorrectAnswerCount]);

    const makeEquationList = () => {

        // set minimum range to the lowest number
        const minNum = Math.min(parseInt(inputValues['first']), parseInt(inputValues['last']));
        const maxNum = Math.max(parseInt(inputValues['first']), parseInt(inputValues['last']));

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

        setTestState("active");
    }

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
                        setWrongAnswers={setWrongAnswers}
                    />
                    : testState === "retest" ?
                        <Retest
                            equationCount={equationCount}
                            correctAnswerCount={correctAnswerCount}
                            equationList={equationList}
                            setEquationList={setEquationList}
                            setEquationIndex={setEquationIndex}
                            wrongAnswers={wrongAnswers}
                            setWrongAnswers={setWrongAnswers}
                            setTestState={setTestState}
                            makeEquationList={makeEquationList}
                        />
                        : null
                }
                <RangeSelection
                    getHandler={getHandler}
                    inputValues={inputValues}
                    makeEquationList={makeEquationList}
                />
                <Counter
                    equationCount={equationCount}
                    correctAnswerCount={correctAnswerCount}
                />
            </main>
            <Footer />
        </div>
    )
}

export default App;