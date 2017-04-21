import React from 'react';
import MenuItem from '../menuitem/MenuItem';

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
class Menu extends React.Component {
  // Lifecycle methods...
  render() {
    // Calculations...
    const width = `${100 / this.props.items.length}%`;
    const menuItems = this.props.items.map((item, i) => {
      const isSelected = this.props.selectedIndex === i;
      const uniqueKey = `item-${i}`;
      return <MenuItem key={uniqueKey}
                       label={item.label}
                       route={item.route}
                       width={width}
                       selected={isSelected} />
    });
    return (
      <ul role="nav" className="menu">
        {menuItems}
      </ul>
    );
  }
}

// Validate props

Menu.propTypes = {
  items: React.PropTypes.array,
  selectedIndex: React.PropTypes.number,
};

export default Menu;
