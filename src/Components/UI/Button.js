import React from 'react';

const Button = (props) => {
    return (
        <>
            <button
                onClick={props.value}>{props.label}
            </button>
        </>
    )
};

export default Button;