import React from 'react'

/**
 * *******************************************************
 *
 *  The Bar presentation component.
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
const Bar = ({ a, b, c, clickHandler }) => {
  const triggerClick = () => {
    clickHandler.call(null, 'Foo');
  };
  return <h1 className='bar' onClick={triggerClick}>Bar: { a + b + c }</h1>
};

// Validate props

Bar.propTypes = {
  a: React.PropTypes.number,
  b: React.PropTypes.number,
  c: React.PropTypes.number,
  clickHandler: React.PropTypes.func,
};

export default Bar;
