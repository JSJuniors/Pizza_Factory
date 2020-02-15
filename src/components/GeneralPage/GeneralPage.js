import React from 'react';

const General = props => (
<div>
    <h1>PIZZA</h1>
    <img alt="PizzaFactory" src={props.img} onClick={props.click}/>
    <h1>FACTORY</h1>
    </div>
    )

export default General