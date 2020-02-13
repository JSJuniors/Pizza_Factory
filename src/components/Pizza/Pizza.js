import React from "react";

import classes from "./Pizza.css"
import PizzaIngredients from "./PizzaIngredients/PizzaIngredients";

const pizza = props => {
        return(
            <div className={classes.pizza}>
            <PizzaIngredients type="crust"></PizzaIngredients>
            <PizzaIngredients type="cheese"></PizzaIngredients>
            <PizzaIngredients type="pepperoni"></PizzaIngredients>
            <PizzaIngredients type="pepper"></PizzaIngredients>
            </div>
        )
}

export default pizza