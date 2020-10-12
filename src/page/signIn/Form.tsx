import React from 'react';
import Email from './../../component/formField/Email';
import Password from './../../component/formField/Password';
import Button from './../../component/Button';
import { makeStyles } from '@material-ui/core/styles';
import useFormController from './hook/useFormController';

const useStyles = makeStyles(theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button: { margin: theme.spacing(4, 0, 4, 0) },
}));

const Form: React.FC<{}> = () => {
    const classes = useStyles();
    const {
        formState,
        formData,
        action,
        validateForm,
        isValidForm
    } = useFormController();

    const signIn = React.useCallback(() => {
        const formStateAfterValidation = validateForm(formState);
        if(!isValidForm(formStateAfterValidation)) {
            action.setFormState(formStateAfterValidation);
        } else {
            console.log('valid');
        }
    }, [formState]);

    return (
        <form className={classes.form} noValidate>
            <Email
                value={formData.email}
                error={formData.emailError}
                onValueChange={action.setEmail}
                onFocus={action.clearEmailError}
                onBlur={action.validateEmail} />
            <Password
                value={formData.password}
                error={formData.passwordError}
                name="password"
                label="Password"
                onValueChange={action.setPassword}
                onFocus={action.clearPasswordError}
                onBlur={action.validatePassword} />
            <Button
                fullWidth
                className={classes.button}
                onClick={signIn}
                text="Sign in" />
        </form>
    );
};

export default Form;