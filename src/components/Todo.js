import React from 'react';

const ToDo = props => {
    const handleClick = () => {
        props.handleToggleItem(props.item);
    }
    
    return (
        <div onClick={handleClick} >
            <p>{props.item.name}</p>
        </div>
    );
};

export default ToDo;