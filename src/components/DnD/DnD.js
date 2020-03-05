import React from 'react';
import Draggable from './Draggable/Draggable';
import Droppable from './Droppable/Droppable';

export default class DndTest extends React.Component{
    render(){
        return (
            <Wrapper>
                <Droppable id = 'dr1' style={droppableStyle}>
                    <Draggable id="item1" style={{margin: '8px'}}><Item>Text</Item></Draggable>
                    <Draggable id="item2" style={{margin: '8px'}}><Item>Text1</Item></Draggable>
                </Droppable>
                <Droppable id='dr2'>

                </Droppable>
            </Wrapper>
        )
    }
}