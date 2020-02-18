import React, {Component} from 'react';
import Dough from '../src/components/Pizza/Dough/Dough';
import GeneralPage from '../src/components/GeneralPage/GeneralPage'
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";

class App extends Component {
   state = {
    redirect: false
   }

nextPageHandle = () => {
  this.setState({redirect: true})
}
  render() { 
    if(this.state.redirect){
      return <Redirect push to="/dough" />
    }
    return ( 
      <div>
        <Layout>
                <Switch>
                    <Route path='/' exact render={() => <GeneralPage nextPage={this.nextPageHandle}  />}  />
                    <Route path='/dough'  component={Dough}/>  
                    <Route path='/pizzaBuilder'  component={PizzaBuilder}/>  
                                    
                </Switch>
            </Layout>
      </div>
     );
  }
}
 
export default App;