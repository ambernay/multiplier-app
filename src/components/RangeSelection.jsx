import React from "react";

function RangeSelection(props) {

    return (
        <div className="range">
            <h3 className="form-label">Choose Table Range:</h3>
            <form onSubmit={props.handleSubmitRange}>
                <div className="selection">
                    <input className="input start-range" type="text" size="2" maxLength={2} onSubmit={e => {props.getFirstNum(e)}}/>
                    <p className="to">to</p>
                    <input className="input end-range" type="text" size="2" maxLength={2} onSubmit={e => {props.getSecondNum(e)}}/>
                </div>
                <button>Make Table</button>
            </form>  
        </div>
    )
}

export default RangeSelection;
