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
        options: [
            {
                src: opt.a,
                cat: cat.a1,
                id: "a",
                title: "Hi"
            },
            {
                src: opt.b,
                cat: cat.b1,
                id: "b",
                title: "Hello"
            },
            {
                src: opt.c,
                cat: cat.c1,
                id: "c",
                title: "Hha"
            }
        ],
        activeItemId: 0,
        isOpen: {
            display: false,
            id: null
        }
    }



    selectProduct = id => {
        let activeId = this.state.options.filter(i => i.id === id)
        this.setState({ isOpen: { display : !this.state.isOpen.display, id } })
        console.log(this.state.activeItemId);
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
                                (<Categories
                                title={i.title}
                                    value={i.cat} />) : <p>error</p>}
                        </div>
                    )
                    )
                }
                <div>

                </div>
                <Pizza ingredients={this.state.ingredients} />
            </div>
        )
    }
}
export default PizzaBuilder;


