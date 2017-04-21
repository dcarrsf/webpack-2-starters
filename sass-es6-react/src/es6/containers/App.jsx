import React from 'react';
import FooBar from './foobar/FooBar.jsx';

/**
 * *******************************************************
 *
 *  The App is the highest level component. It acts as
 *  a wrapper for other top level container components.
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
class App extends React.Component {
  // Lifecycle methods...
  render() {
    // Calculations...
    return(
      <main>
        <FooBar />
      </main>
    );
  }
}

export default App;
