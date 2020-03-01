import React from "react";

import classes from "./Pizza.css"
import PizzaIngredients from "./PizzaIngredients/PizzaIngredients";

const pizza = props => {
    let transformedIngs = Object.keys(props.ingredients)
    .map(igKey => {
           return <PizzaIngredients key={igKey} type={igKey} />
    })
    if (transformedIngs.length === 0){
        transformedIngs = <p>Please start your choose</p>
    }
    //console.log(transformedIngs);
    

        return(
            <div className={classes.pizza}>
            <PizzaIngredients type="crust">
                {transformedIngs}
            </PizzaIngredients>
            </div>
        )
}

export default pizza