import {
    createMuiTheme,
    responsiveFontSizes
} from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

const baseTheme = createMuiTheme();

const appTheme = responsiveFontSizes(
    createMuiTheme({
        ...baseTheme,
        typography: {
            fontSize: 25
        },
        palette: {
            primary: {
                main: indigo[900]
            },
            secondary: {
                main: deepPurple[500],
            },
            error: {
                main: red[500]
            },
            info: {
                main: blue[500]
            },
            success: {
                main: green[600]
            },
            warning: {
                main: yellow[700]
            }
        }
    })
);

export default appTheme;