import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/fuel-savings">Demo App</Link>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
        {this.props.children}
      </div>
    </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
