import React from 'react';
import classes from './Option.css'
const option = (props) => {
    return (
        <img 
        className={classes.img}
        src={props.img} 
        alt='option' 
        onClick={props.optionSelected}/>
    )
}

export default option