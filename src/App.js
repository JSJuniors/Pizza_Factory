import React, {Component} from 'react';
import Dough from '../src/components/Pizza/Dough/Dough';
import GeneralPage from '../src/components/GeneralPage/GeneralPage'
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Layout>
                <Switch>
                    <Route path='/' exact component={GeneralPage} />
                    <Route path='/dough'  component={Dough} />                  
                </Switch>
            </Layout>
      </div>
     );
  }
}
 
export default App;