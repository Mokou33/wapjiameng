import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import './comment/css/reset.css'

import Layout from "./components/layout";
import {routers} from "./routers";






class App extends Component {
    
  render() {
    return (
        <Router>
          <Layout>
            <Switch>
              {
                routers.map((item, index) => {
                  return (
                      <Route
                          key={index}
                          {...item}
                      ></Route>
                  )
                })
              }
            </Switch>
          </Layout>
        </Router>
    );
  }
}

export default App;
