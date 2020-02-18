import React from "react";

import classes from "./Pizza.css"
import PizzaIngredients from "./PizzaIngredients/PizzaIngredients";

const pizza = props => {
    let transformedIngs = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <PizzaIngredients key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, [])
    if (transformedIngs.length === 0){
        transformedIngs = <p>Please start your choose</p>
    }
    //console.log(transformedIngs);
    

        return(
            <div className={classes.pizza}>
            <PizzaIngredients type="crust"></PizzaIngredients>
            {transformedIngs}
            </div>
        )
}

export default pizza