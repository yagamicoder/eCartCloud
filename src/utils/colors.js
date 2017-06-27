import {indigo100, indigo300, indigo500, grey50, grey300, grey600, deepOrange100, deepOrange300, deepOrange500 } from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const colors = {
    primary1Color: indigo500,
    primary2Color: indigo300,
    primary3Color: indigo100,
    accent1Color: deepOrange500,
    accent2Color: deepOrange300,
    accent3Color: deepOrange100,
    textColor: indigo500,
    alternateTextColor: grey50,
    canvasColor: grey300,
    borderColor: grey300,
    disabledColor: fade(grey600, 0.3),
    pickerHeaderColor: indigo500,
    clockCircleColor: fade(grey600, 0.07),
    shadowColor: grey300,
    white: '#FFF',
    black: '#000'
};

export default colors;
