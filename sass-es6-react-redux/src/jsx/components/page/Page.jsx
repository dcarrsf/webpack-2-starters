import React from 'react';

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
class Page extends React.Component {
  // Lifecycle methods...
  render() {
    // Calculations...
    return (
      <p className="page1" style={{margin: '100px'}}>
        WHOO HOO! - {this.props.selectedIndex}
      </p>
    );
  }
}

// Validate props

Page.propTypes = {
  items: React.PropTypes.array,
  clickHandler: React.PropTypes.func,
  selectedIndex: React.PropTypes.number,
};

export default Page;
