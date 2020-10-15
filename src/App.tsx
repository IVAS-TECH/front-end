import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Main from './component/form/stencilForm/Main';

const App: React.FC<{}> = () => (
    <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    </>
);

export default App;