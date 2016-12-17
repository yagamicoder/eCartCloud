import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigo300, indigo500, grey50, grey200, grey300, grey600, amber500 } from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {

  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: indigo500,
        primary2Color: amber500,
        primary3Color: indigo300,
        accent1Color: amber500,
        accent2Color: grey200,
        accent3Color: grey600,
        textColor: indigo500,
        alternateTextColor: grey50,
        canvasColor: grey300,
        borderColor: grey300,
        disabledColor: fade(grey600, 0.3),
        pickerHeaderColor: indigo500,
        clockCircleColor: fade(grey600, 0.07),
        shadowColor: grey300,
      }
  });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
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
