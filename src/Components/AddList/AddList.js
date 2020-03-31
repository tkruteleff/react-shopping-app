import React from 'react';

import Button from '../UI/Button/Button';

const AddList = (props) => {

    const onClickHandler = () => {
        console.log("Hello World!")
    }

    return (
        <div>
            <Button
                clicked={onClickHandler}>
                Add a new list
            </Button>
        </div>
    )
}

export default AddList;