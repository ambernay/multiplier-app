import React from "react";

function RangeSelection(props) {

    return (
        <div className="range">
            <form onSubmit={props.handleSubmitRange}>
                <fieldset className="selection">
                    <legend>Choose Table Range:</legend>

                    <label className="sr-only" for="start-range"></label>
                    <input id="start-range" className="input" type="text" size="2" maxLength={2} onSubmit={e => { props.getFirstNum(e) }} />

                    <p className="to">to</p>

                    <label className="sr-only" for="end-range"></label>
                    <input id="end-range" className="input" type="text" size="2" maxLength={2} onSubmit={e => { props.getSecondNum(e) }} />
                </fieldset>
                <button>Make Table</button>
            </form>
        </div>
    )
}

export default RangeSelection;
