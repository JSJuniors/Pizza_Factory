import React from 'react';

const Draggable = props => {

    return (
        <div
            id={props.id}
            draggable={true}
            onDragStart={props.drag}
            onDragOver={props.noAllowDrop}>
            {props.children}
        </div>
    )
}

export default Draggable