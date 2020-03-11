import React from "react";

import classes from "./Pizza.css"
import PizzaIngredients from "./PizzaIngredients/PizzaIngredients";

const pizza = props => {
        return(
            <div className={classes.pizza}>
            <PizzaIngredients type="crust">
                {props.children}
            </PizzaIngredients>
            </div>
        )
}

export default pizza