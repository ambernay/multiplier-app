import React, { useRef, useEffect } from "react";

function RangeSelection({ getHandler, inputValues, makeEquationList, testState }) {

    const inputRef = useRef(null);
    const buttonRef = useRef(false);

    const screenOrientation = (window.innerWidth < window.innerHeight) ? 'portrait' : 'landscape';

    useEffect(() => {
        // focus first range input on load
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        // re-enables 'make table' button when range inputs change and both inputs have values
        buttonRef.current.disabled = (inputValues.first && inputValues.last) ? false : true;
    }, [inputValues.first, inputValues.last]);

    const handleSubmitRange = (e) => {
        e.preventDefault();
        makeEquationList();
        // disables 'make table' button until range inputs change
        buttonRef.current.disabled = true;
    };

    return (
        <>
            {screenOrientation === 'landscape' || (screenOrientation === 'portrait' && testState === 'initial') ?
                <section className='range'>
                    <h3 className="form-label">Choose Range:</h3>
                    <form onSubmit={handleSubmitRange}>
                        <div className="selection">
                            <label className='sr-only' htmlFor='start'>Start Range</label>
                            <input id='start' className="input" ref={inputRef}
                                onFocus={(e) => e.target.select()}
                                onChange={getHandler('first')}
                                value={inputValues.first}
                                type="text" size="2" maxLength={2} autoComplete="off" />

                            <p className="to">to</p>

                            <label className='sr-only' htmlFor='end'>End Range</label>
                            <input id='end' className="input" onFocus={(e) => e.target.select()}
                                onChange={getHandler('last')}
                                value={inputValues.last} type="text" size="2" maxLength={2} autoComplete="off" />
                        </div>
                        <button className="button" ref={buttonRef}
                        >Make Table</button>
                    </form>
                </section>
                :
                <div className='range-button-container'>
                    <button className="button toggle" ref={buttonRef}
                    >New Table</button>
                </div>
            }
        </>
    )
}

export default RangeSelection;
