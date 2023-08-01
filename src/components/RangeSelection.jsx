import React, { useRef, useEffect } from "react";

function RangeSelection({ getHandler, inputValues, makeEquationList }) {

    // focus first range input on load
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmitRange = (e) => {
        e.preventDefault();
        makeEquationList();
    };

    return (
        <section className="range">
            <h3 className="form-label">Choose Table Range:</h3>
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
                <button className="button">Make Table</button>
            </form>
        </section>
    )
}

export default RangeSelection;
