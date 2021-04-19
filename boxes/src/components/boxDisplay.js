import React from 'react';

const BoxDisplay = ({color}) => {
    const displayBox = {
        backgroundColor: [color],
        width: "150px",
        height: "150px",
        display: "inline-block",
    };
    return (
            <div style={displayBox}></div>
    );
};

export default BoxDisplay;