
import React from "react";
import PropTypes from "prop-types"
import classes from "./PizzaIngredients.css"

const PizzaIngredients = (props) => {
    let ingredient = null

    switch (props.type) {
        case ("crust"):
            ingredient = <div className={classes.crust}>
            </div>
            break;
        case ("cheese"):
            ingredient = (
                <div className={classes.cheese}> </div>
            );
            break;
        case ("pepperoni"):
            ingredient = <div>
                <div className={[classes.pepperoni, classes.pep1].join(" ")}></div>
                <div className={[classes.pepperoni, classes.pep2].join(" ")}></div>
                <div className={[classes.pepperoni, classes.pep3].join(" ")}></div>
                <div className={[classes.pepperoni, classes.pep4].join(" ")}></div>
                <div className={[classes.pepperoni, classes.pep5].join(" ")}></div>
                <div className={[classes.pepperoni, classes.pep6].join(" ")}></div>
                
            </div>
            break;

        case ("bacon"):
            ingredient = <div className={classes.Bacon}></div>
            break;

        case ("pepper"):
            ingredient = <div>
                <div className={[classes.pepper, classes.pepper1].join(" ")}></div>
                <div className={[classes.pepper, classes.pepper2].join(" ")}></div>
                <div className={[classes.pepper, classes.pepper3].join(" ")}></div>
                <div className={[classes.pepper, classes.pepper4].join(" ")}></div>
                <div className={[classes.pepper, classes.pepper5].join(" ")}></div>
                <div className={[classes.pepper, classes.pepper6].join(" ")}></div>
                
            </div>
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
