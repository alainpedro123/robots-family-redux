
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

import { requestRobots } from './redux/action/request-robots';
import { searchRobots } from './redux/action/search-robots';

class App extends Component {
  componentDidMount() {
    this.props.requestingRobots();
  }

  render() {
    const { robots, searchField, searchingChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ? <h1>Loading...</h1> :
      (
        <div className="app">
          <h1 className="header">Robot friends</h1>
          <SearchBox searchChange={searchingChange} />
          <CardList robots={filteredRobots} />
        </div>
      )
  }
}

//it tells what peace of state it needs listen to and send down as props 
const mapStateToProps = state => {
  return {
    //initialState: state.reducer.initialState
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
};

// it lets us create functions that dispatch when called, and pass those functions as props to your component.
const mapDispatchToProps = (dispatch) => {
  return {
    searchingChange: (event) => dispatch(searchRobots(event.target.value)),
    requestingRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);