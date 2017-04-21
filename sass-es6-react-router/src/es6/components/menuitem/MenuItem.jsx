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
const MenuItem = ({ label, route, width, selected }) => {
  const cls = selected ? 'active' : 'normal';
  const style = { width: width };
  return (
    <li className="menuItem card" style={style}>
      <Link className={cls} to={route}>{label}</Link>
    </li>
  );
};

// Validate props

MenuItem.propTypes = {
  label: React.PropTypes.string,
  route: React.PropTypes.string,
  width: React.PropTypes.string,
  selected: React.PropTypes.bool,
};

export default MenuItem;
