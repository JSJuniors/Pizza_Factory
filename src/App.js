import React, { Component } from 'react';
import GeneralPage from '../src/components/GeneralPage/GeneralPage'
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";
import classes from './App.css'
class App extends Component {
  state = {
    redirect: false
  }

  nextPageHandle = () => {
    this.setState({ redirect: true })
  }

  render() {
     if (this.state.redirect) {
      return <Redirect from="/" to="/pizzaBuilder" />
    } 
    return (
      <div className={classes.b}>
        <Layout>
          <Switch>
            <Route path='/pizzaBuilder' component={PizzaBuilder} />
            <Route path='/' exact render={() => <GeneralPage nextPage={this.nextPageHandle} />} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App; 

