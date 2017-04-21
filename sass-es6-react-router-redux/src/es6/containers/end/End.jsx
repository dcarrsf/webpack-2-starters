import React from 'react'
import { connect } from 'react-redux';
import getEndAction from '../../actions/creators/end-actions.js';

class End extends React.Component {
  render() {
    return (
      <div className="end card" onClick={this.props.clickHandler}>
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
    title: store.endState.title,
    subtitle: store.endState.subtitle,
    clickTracks: store.endState.clickTracks,
  };
};

// Redux dispatch (bindings)
const mapDispatchToProps = function(dispatch) {
  return {
    clickHandler: (id) => {
      dispatch(getEndAction(id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(End);
