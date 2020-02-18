import React, { Component } from 'react';
import Pizza from '../../components/Pizza/Pizza';


class PizzaBuilder extends Component {
    state = { 
        ingredients: {
            pepperoni: 1,
            papper: 1,
            cheese: 1
        }
     }
    render() { 
        return ( 
            <div>
                <Pizza ingredients={this.state.ingredients} />
            </div>
         );
    }
}
 
export default PizzaBuilder;