import React from 'react'

/**
 * *******************************************************
 *
 *  The Foo presentation component.
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
const Foo = ({ a, b, clickHandler }) => {
  const triggerClick = () => {
    clickHandler.call(null, 'Foo');
  };
  return <h1 className='foo' onClick={triggerClick}>Foo: { a + b }</h1>
};

// Validate props

Foo.propTypes = {
  a: React.PropTypes.number,
  b: React.PropTypes.number,
  clickHandler: React.PropTypes.func,
};

export default Foo;
