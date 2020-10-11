import React from 'react';
import Email from './../../component/formField/Email';
import Password from './../../component/formField/Password';
import Button from '@material-ui/core/Button';
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
                variant='contained'
                color='primary'
                className={classes.button}>
                Sign in
            </Button>
            <Grid container direction='row' spacing={6}>
                <Grid item xs>
                <Button
                    fullWidth
                    variant='outlined'
                    color='secondary'
                    className={classes.button}>
                    Forgot password?
                </Button>
                </Grid>
                <Grid item xs>
                    <Button
                        fullWidth
                        variant='outlined'
                        color='secondary'
                        className={classes.button}>
                        Create organization
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;