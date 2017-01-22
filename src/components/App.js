import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import colors from '~/utils/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import {Header, Footer, NavMenu} from '~/components';

class App extends React.Component {
  render() {
    const path = window.location.pathname;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section>
          <div>{path !== '/' ? <NavMenu /> : null}</div>
          <div style={path !== '/' ? wrapper : loginWrapper}>
            {path !== '/' ? <Header /> : null}
            {this.props.children}
            <Footer />
          </div>
        </section>
      </MuiThemeProvider>
    );
  }
}

const wrapper = {
  paddingLeft: '220px',
  maxWidth: '1600px',
  margin: '0 auto',
  paddingBottom: '150px'
};
const loginWrapper = {
  maxWidth: '1600px',
  margin: '0 auto',
  paddingBottom: '150px'
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.primary1Color,
    primary2Color: colors.primary2Color,
    primary3Color: colors.primary3Color,
    accent1Color: colors.accent1Color,
    accent2Color: colors.accent2Color,
    accent3Color: colors.accent3Color,
    textColor: colors.textColor,
    alternateTextColor: colors.alternateTextColor,
    canvasColor: colors.canvasColor,
    borderColor: colors.borderColor,
    disabledColor: colors.disabledColor,
    pickerHeaderColor: colors.pickerHeaderColor,
    clockCircleColor: colors.clockCircleColor,
    shadowColor: colors.shadowColor,
  },
  toolbar: {
      backgroundColor: colors.primary1Color,
      iconColor: fade(colors.textColor, 0.4)
  },
  snackbar: {
    backgroundColor: colors.accent2Color,
    textAlign: 'center',
    zIndex: '999999999999999'
  }
});

App.propTypes = {
  children: PropTypes.element
};

export default App;
