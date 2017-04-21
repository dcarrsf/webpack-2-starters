import React from 'react';
import { Link } from 'react-router';

/**
 * *******************************************************
 *
 *  The MenuItem presentation component.
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
const MenuItem = ({ id, label, route, width, selected, clickHandler }) => {
  const cls = selected ? 'active' : 'normal';
  const style = { width: width };
  const itemClick = () => {
    clickHandler.call(null, id);
  };
  return (
    <li className="menuItem card" style={style}>
      <Link className={cls} to={route} onClick={itemClick}>{label}</Link>
    </li>
  );
};

// Validate props

MenuItem.propTypes = {
  id: React.PropTypes.number,
  label: React.PropTypes.string,
  route: React.PropTypes.string,
  width: React.PropTypes.string,
  selected: React.PropTypes.bool,
  clickHandler: React.PropTypes.func,
};

export default MenuItem;
