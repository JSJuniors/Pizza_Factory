import React, { Component } from 'react';
import Pizza from '../../components/Pizza/Pizza';
import Options from '../../components/Options/Options'
import Categories from '../../components/Options/Categories/Categories'

let opt = {
    a: 'https://image.flaticon.com/icons/svg/2592/2592552.svg',
    b: 'https://image.flaticon.com/icons/svg/2592/2592558.svg',
    c: 'https://image.flaticon.com/icons/svg/2592/2592614.svg',
    d: 'https://image.flaticon.com/icons/svg/2592/2592702.svg'
}

let cat = {
    a1: 'https://image.flaticon.com/icons/svg/2592/2592552.svg',
    b1: 'https://image.flaticon.com/icons/svg/2592/2592558.svg',
    c1: 'https://image.flaticon.com/icons/svg/2592/2592614.svg',
    d1: 'https://image.flaticon.com/icons/svg/2592/2592702.svg'
}

class PizzaBuilder extends Component {
    state = { 
        ingredients: {
            pepperoni: 1,
            papper: 1,
            cheese: 1
        },
        options: {
            a: {src: opt.a, cat: cat.a1, id: "a"},
            b: {src: opt.b, cat: cat.a2, id: "b"},
            c: {src: opt.c, cat: cat.a3, id: "c"}
        },
        activeItemId: 0,
    }

    selectItem = id => {
        this.setState({
           activeItemId: "b",
        });
        alert(this.state.activeItemId);
      };

    
    render() { 
        let  items  = Object.keys(this.state.options) // [a, b, c]
    
        let activeItem = items.map(item =>       
            item.id === this.state.activeItemId ? <Categories value={item.cat} /> : <p>Choose Option</p>
        )

        return ( 
            <div>
                <Options 
                    options={items} // ???????????
                    optionSelect={this.selectItem}
                    src={this.state.options}
                />   
                
                {activeItem}                
                <Pizza ingredients={this.state.ingredients} /> 
            </div>
         );
    }
}
 
export default PizzaBuilder;