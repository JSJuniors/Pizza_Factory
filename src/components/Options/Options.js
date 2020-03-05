import React from 'react';
import Option from './Option/Option'
import classes from './Options.css'
const Options = (props) =>  ( 
       /*  <div className={classes.options}>
            {props.options.map(i => { // a, b, c */
        <Option 
        img={props.src} 
        optionSelected={props.optionSelect} />
    )

 
export default Options;
  
    	

