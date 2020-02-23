import React from 'react';
import Option from './Option/Option'
import classes from './Options.css'

const options = (props) => {
    for(let i = 0; i < props.options.length; i++){
        return (
            <div className={classes.cat}>
                 <Option 
                 className={classes.option}
                 key={props.options[i]} 
                 img={props.options[i]} 
                 optionSelected={props.optionSelect}
                 />
            </div>
        )
    }	
}

export default options