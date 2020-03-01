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
            a: {src: opt.a, id: "a"},
            b: {src: opt.b, id: "b"},
            c: {src: opt.c, id: "c"}
    },
        categ: [cat.a1, cat.b1, cat.c1, cat.d1],
        activeItemId: -1,
    }

    selectItem = id => {
        this.setState({
           activeItemId: id,
        });
        alert(this.state.activeItemId)
      };

    
    render() { 
        let  items  = Object.keys(this.state.options)
        //const  activeItemId  = this.state;
       
        const activeItem = items.find(item => item.id === this.state.activeItemId);

        items = items.map(i => i.src)

        return ( 
            <div >
                <Options 
                    options={items}
                    optionSelect={this.selectItem}
                />   
                <Categories 
                value={activeItem}
                />
                
                <Pizza ingredients={this.state.ingredients} /> 
            </div>
         );
    }
}
 
export default PizzaBuilder;