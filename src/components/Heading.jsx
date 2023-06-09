import React from "react";

function TopFrame() {
    return (
        <div className="top-frame">
            <div className="wood-grain"></div>
            {/* <img className="wood" src="./images/textures/long_wood_grain.png" alt="wood texture" /> */}
        </div>
    )
}

function Heading() {
    return (
        <header className="title-wrapper">
            <h1 className="title-text">Multiplier</h1>
        </header>
    )
}

export { TopFrame, Heading };