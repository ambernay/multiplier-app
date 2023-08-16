import React from 'react';

function RangeButton({ setTestState }) {


    return (
        <div className='range-button-container'>
            <button className="toggle" onClick={() => setTestState('initial')}
            >New Test ?</button>
        </div>
    )
}

export default RangeButton;