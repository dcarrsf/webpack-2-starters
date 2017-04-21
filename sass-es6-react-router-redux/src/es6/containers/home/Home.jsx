import React from 'react';
import { connect } from 'react-redux';
import getHomeAction from '../../actions/creators/home-actions.js';

class Home extends React.Component {
  render() {
    return (
      <div className="home card" onClick={this.props.clickHandler}>
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
    title: store.homeState.title,
    subtitle: store.homeState.subtitle,
    clickTracks: store.homeState.clickTracks,
  };
};

// Redux dispatch (bindings)
const mapDispatchToProps = function(dispatch) {
  return {
    clickHandler: (id) => {
      dispatch(getHomeAction(id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
