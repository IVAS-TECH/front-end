import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import SignIn from './page/signIn/Page';

const App: React.FC<{}> = () => (
    <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <SignIn />
        </ThemeProvider>
    </>
);

export default App;