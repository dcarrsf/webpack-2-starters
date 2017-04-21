import React from 'react';
import Foo from '../../components/foo/Foo.jsx';
import Bar from '../../components/bar/Bar.jsx';

/**
 * *******************************************************
 *
 *  The controller for the FooBar section of the page.
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
class FooBar extends React.Component {
  constructor(props) {
    super(props);
    // State is initialized here
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      clickHandler: this.handleClick.bind(this),
    }
  }

  // State is handled here
  handleClick(id) {
    const incr = !id ? 1 : 10;
    this.setState({
      a: this.state.a + incr,
      b: this.state.b + incr,
      c: this.state.c + incr,
    });
  }

  render() {
    // Calculations...
    return (
      <div className='foobar card'>
        <div className='pull-left'><Foo {...this.state} /></div>
        <div className='pull-right'><Bar {...this.state} /></div>
      </div>
    );
  }
}

export default FooBar;
