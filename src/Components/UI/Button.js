import React from 'react';

import classes from './Button.css'

const Button = (props) => {
    return (
            <button
                className={[classes.Button, classes[props.btnType]].join(' ')}
                onClick={props.value}>{props.label}</button>
    )
};

export default Button;