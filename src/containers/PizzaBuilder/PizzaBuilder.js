import React, { Component } from 'react';
import Pizza from '../../components/Pizza/Pizza';
import Options from '../../components/Options/Options'
import Categories from '../../components/Options/Categories/Categories'
import Droppable from '../../components/DnD/Droppable/Droppable';
import Draggable from '../../components/DnD/Draggable/Draggable'
import PizzaIngredients from '../../components/Pizza/PizzaIngredients/PizzaIngredients';

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
        options: [
            {
                src: opt.a,
                cat: cat.a1,
                id: "a",
                type: "cheese"
            },
            {
                src: opt.b,
                cat: cat.b1,
                id: "b",
                type: "pepper"
            },
            {
                src: opt.c,
                cat: cat.c1,
                id: "c",
                type: "pepperoni"
            }
        ],
        activeItemId: 0,
        isOpen: {
            display: false,
            id: null,
            type: null
        }
    }

    selectProduct = id => {
        this.setState({ isOpen: { display: !this.state.isOpen.display, id } })
        console.log(this.state.activeItemId);
    }

    drop = (e) => {
        e.preventDefault();
    }
    allowDrop = (e) => {
        e.preventDefault();
    }
    drag = (e) => {
        e.stopPropagation();
        console.log(this.state.type);  
    }
    noAllowDrop = (e) => {
        e.stopPropagation()
    }




    render() {

        return (
            <div>
                {
                    this.state.options.map(i => (
                        <div>
                            <Options
                                src={i.src}
                                optionSelect={() => this.selectProduct(i.id)}
                                key={i.id}
                            />
                            {i.id === this.state.isOpen.id && this.state.isOpen.display ?
                                (<Draggable
                                    id={i.id}
                                    drag={this.drag}
                                    noAllowDrop={this.noAllowDrop}
                                >
                                    <Categories
                                        value={i.cat} />
                                </Draggable>) : <p>Choose option</p>}
                        </div>
                    )
                    )
                }
                <div>
                </div>
                <Droppable
                    drop={this.drop}
                    allowDrop={this.allowDrop}
                    id={this.state.options.map(i => i.id)}>
                    <Pizza ingredients={this.state.ingredients}>
                        {this.state.options.map(i => (
                            <PizzaIngredients
                                type={i.type}
                                key={i.id} />
                        )
                        )
                        }
                    </Pizza>
                </Droppable>

            </div>
        )
    }
}
export default PizzaBuilder;


