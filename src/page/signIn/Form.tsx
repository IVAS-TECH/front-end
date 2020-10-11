import React from 'react';
import Email from './../../component/formField/Email';
import Password from './../../component/formField/Password';
import Button from './../../component/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    test: {
        backgroundColor: theme.palette.warning.main
    },
    button: { margin: theme.spacing(4, 0, 2, 0) },
}));

const Form: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <form className={classes.form} noValidate>
            <Email className={classes.test} value="ivo@mail.bg" onValueChange={v => console.log(v)}/>
            <Password value="test" name="password" label="Password" onValueChange={v => console.log(v)}/>
            <Button
                fullWidth
                className={classes.button}
                text="Sign in" />
            <Grid container direction='row' spacing={6}>
                <Grid item xs>
                <Button
                    fullWidth
                    outlined
                    secondary
                    className={classes.button}
                    text="Forgot password?" />
                </Grid>
                <Grid item xs>
                    <Button
                        fullWidth
                        outlined
                        secondary
                        className={classes.button}
                        text="Create organization" />
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;