import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Default from './components/Default';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Model from './components/Model'
import React, { Component } from 'react'
import ContactForm from './components/ContactForm';


class App extends Component {
  render() {

    return (
      <React.Fragment>

        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/contact" component={Contact} />
          <Route path="/appointments" component={ContactForm} />
          <Route component={Default} />
        </Switch>
        <Model/>
      </React.Fragment> 
    )
  }
}

export default App

