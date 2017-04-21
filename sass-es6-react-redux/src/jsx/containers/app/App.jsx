import React from 'react';
import { connect } from 'react-redux';
import Page from '../../components/page/Page';
import getAppAction from '../../actions/creators/app-actions.js';

/**
 * *******************************************************
 *
 *  The App is the highest level component. It acts as
 *  a wrapper for other top level container components.
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
class App extends React.Component {

  // Draw the view...
  render() {
    // Calculations...
    return(
      <div>
        <h1>React Redux App </h1>
        <Page items={this.props.items}
              selectedIndex={this.props.selectedIndex}
              clickHandler={this.props.clickHandler} />
      </div>
    )
  }
}

// Redux props (bindings)
const mapStateToProps = function(store) {
  return {
    items: store.appState.items,
    selectedIndex: store.appState.selectedIndex,
  };
};

// Redux dispatch (bindings)
const mapDispatchToProps = function(dispatch) {
  return {
    clickHandler: (index) => {
      dispatch(getAppAction(index));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
