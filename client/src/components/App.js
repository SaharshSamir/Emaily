
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
// import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Emaily!
      </h1>
      Collect feedback form your users
      <div style={{margin: '20px'}}>
        <a href="/surveys" class="waves-effect waves-light btn">
          <i class="material-icons right">
            input
          </i>
          Dashboard
        </a>
      </div>
    </div>
  );
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
