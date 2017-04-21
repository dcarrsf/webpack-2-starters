import React from 'react';
import { browserHistory } from 'react-router';
import Menu from '../../components/menu/Menu';

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
  // Constructor
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      items: [{
          label: 'Home',
          route: '/',
          selected: true
        },{
          label: 'Start',
          route: '/start',
          selected: false
        },{
          label: 'End',
          route: '/end',
          selected: false
        }
      ],
      selectedIndex: 0,
    };

    // Sync menu to Router
    browserHistory.listen( location =>  {
     this.setState({
       selectedIndex: this.getIndex(location.pathname),
     });
    });
  }

  getIndex(route) {
    if (route === '/start') {
      return 1;
    } else if (route === '/end') {
      return 2;
    }
    return 0;
  }

  // Draw the view...
  render() {
    // Calculations...
    return(
      <div>
        <h1>React Router App</h1>
        <Menu items={this.state.items}
              selectedIndex={this.state.selectedIndex} />
        {/* NEST COMPOMNENTS HERE!... */}
        {this.props.children}
      </div>
    )
  }
}
export default App;
