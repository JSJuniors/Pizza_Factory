import React from 'react';


const Droppable = props => (
            <div 
            id={props.id} 
            onDrop={props.drop} 
            onDragOver={props.allowDrop} >
                {props.children}
            </div>
   )
    


export default Droppable