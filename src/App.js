import React, {Component} from 'react';
import PizzaBuilder from '../src/containers/PizzaBuilder/PizzaBuilder'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <PizzaBuilder />
      </div>
     );
  }
}
 
export default App;