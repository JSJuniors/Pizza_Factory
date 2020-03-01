import React from 'react';
import Option from './Option/Option'
import classes from './Options.css'
const Options = (props) =>  ( 
        <div className={classes.options}>
            {props.options.map(i => {
               return (
        <Option 
        key={i} 
        img={i} 
        optionSelected={props.optionSelect} />
        )
    })}
</div>
    )

 
export default Options;
  
    	

