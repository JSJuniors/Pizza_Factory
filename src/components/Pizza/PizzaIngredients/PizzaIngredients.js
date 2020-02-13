
import React from "react";
import PropTypes from "prop-types"
import classes from "./PizzaIngredients.css"

const PizzaIngredients = (props) => {
    let ingredient = null

    switch (props.type) {
        case ("crust"):
            ingredient = <div className={classes.crust}></div>
            break;
        case ("cheese"):
            ingredient = (
            <div className={classes.cheese}> </div>
            );
            break;
            case ("pepperoni"):
                ingredient = <div className={classes.pepperoni}></div>
                break;
                
            case ("bacon"):
                ingredient = <div className={classes.Bacon}></div>
                    break;
                    
            case ("pepper"):
                ingredient = <div className={classes.pepper}></div>
                    break;
        default: 
        ingredient = null
            break;
    }
    return ingredient
}
PizzaIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default PizzaIngredients
