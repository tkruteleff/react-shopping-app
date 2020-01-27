import React from 'react';

const Button = (props) => {
    return (
        <>
            <button
                onClick={props.increased}>Increase</button>
            <button
                onClick={props.decreased}>Decrease</button>
            <button
                onClick={props.checked}>Check</button>
            <button 
                onClick={props.removed}>Remove</button>
        </>
    )
};

export default Button;