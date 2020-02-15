import React from 'react';
import PizzaIngredients from '../PizzaIngredients/PizzaIngredients'
import {Route} from 'react-router-dom'
import PizzaBuilder from '../../../containers/PizzaBuilder/PizzaBuilder'

const Dough = (props) => {

    nextStepHandler = () => {
        props.history.replace('/pizzaBuilder')
    }
    
    return (
        <div>
            <div>Italiano</div>
            <div>Americano</div>
            <PizzaIngredients type="crust" />
            <button onClick={this.nextStepHandler}>NEXT</button>
        <Route path={this.props.match + '/pizzaBuilder'}
            render={() => (<PizzaBuilder {...this.props} />)} />  
                    </div>

     );
}

export default Dough;