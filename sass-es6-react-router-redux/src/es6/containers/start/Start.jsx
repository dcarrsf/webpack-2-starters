import React from 'react';
import { connect } from 'react-redux';
import getStartAction from '../../actions/creators/start-actions.js';

class Start extends React.Component {
  render() {
    return (
      <div className="start card" onClick={this.props.clickHandler}>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
        <p>{`Clicks: ${this.props.clickTracks}`}</p>
      </div>
    );
  }
}

// Redux props (bindings)
const mapStateToProps = function(store) {
  return {
    title: store.startState.title,
    subtitle: store.startState.subtitle,
    clickTracks: store.startState.clickTracks,
  };
};

// Redux dispatch (bindings)
const mapDispatchToProps = function(dispatch) {
  return {
    clickHandler: (id) => {
      dispatch(getStartAction(id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
