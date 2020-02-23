import React, { Component } from 'react';
//import Pizza from '../../components/Pizza/Pizza';
import Options from '../../components/Options/Options'

let images = {
    a: 'https://image.flaticon.com/icons/svg/2592/2592552.svg',
    b: 'https://image.flaticon.com/icons/svg/2592/2592558.svg',
    c: 'https://image.flaticon.com/icons/svg/2592/2592614.svg',
    d: 'https://image.flaticon.com/icons/svg/2592/2592702.svg'
}

class PizzaBuilder extends Component {
    state = { 
        ingredients: {
            pepperoni: 1,
            papper: 1,
            cheese: 1
        },
        options: [images.a, images.b, images.c, images.d]
     }

     optionSelect = () => {
         alert(this.state.options.length)
     }
    render() { 
        return ( 
            <div>
                <Options 
                    options={this.state.options}
                    optionSelect={this.optionSelect}
                />
                
                {/* 
                <Pizza ingredients={this.state.ingredients} /> */}
            </div>
         );
    }
}
 
export default PizzaBuilder;