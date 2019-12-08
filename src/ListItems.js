import React from 'react';

import './ListItems.css'

const ListItems = (props) => {

    return (
            <ul className="list-items">
                {props.allItems.map((item) => {
                    return (
                        <div>
                            <li key={item.id}>{item.name} {item.amount}</li>
                            <button>Inc</button>
                            <button>Dec</button>
                            <button>Check</button>
                        </div>
                    )
                })}
            </ul>
    );
};

export default ListItems;