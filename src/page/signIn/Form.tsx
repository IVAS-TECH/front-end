import React from 'react';
import Email from './../../component/formField/Email';
import Password from './../../component/formField/Password';
import Button from './../../component/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useFormController from './hook/useFormController';

const useStyles = makeStyles(theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button: { margin: theme.spacing(4, 0, 2, 0) },
}));

const Form: React.FC<{}> = () => {
    const classes = useStyles();
    const {
        formData,
        setEmail,
        setPassword,
        validateEmail,
        validatePassword,
        clearEmailError,
        clearPasswordError
    } = useFormController();

    return (
        <form className={classes.form} noValidate>
            <Email
                value={formData.email}
                error={formData.emailError}
                onValueChange={setEmail}
                onFocus={clearEmailError}
                onBlur={validateEmail} />
            <Password
                value={formData.password}
                error={formData.passwordError}
                name="password"
                label="Password"
                onValueChange={setPassword}
                onFocus={clearPasswordError}
                onBlur={validatePassword} />
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