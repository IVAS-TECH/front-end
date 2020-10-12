import React from 'react';
import { Maybe, Nothing } from 'purify-ts/Maybe'
import { EmailError, emailValidator } from '../../../formFieldValidator/email';
import { PasswordError, passwordValidator } from '../../../formFieldValidator/password';
import { update2 } from '../../../utility/update';
import emailErrorMessage from '../../../errorMessage/email';
import passwordErrorMessage from '../../../errorMessage/password';

interface State {
    value: {
        email: string,
        password: string
    },
    error: {
        email: Maybe<EmailError>,
        password: Maybe<PasswordError>
    }
}

interface SetEmail {
    type: 'set-email',
    payload: string
}

interface SetPassword {
    type: 'set-password',
    payload: string
}

interface ValidateEmail {
    type: 'validate-email'
}

interface ValidatePassword {
    type: 'validate-password';
}

interface ClearPasswordError {
    type: 'clear-password-error';
}

interface ClearEmailError {
    type: 'clear-email-error'
}

interface ValidateForm {
    type: 'validate-form'
}

interface SetState {
    type: 'set-state',
    payload: State
}

type Action
= SetEmail
| SetPassword
| ValidateEmail
| ValidatePassword
| ClearEmailError
| ClearPasswordError
| ValidateForm
| SetState;

function setEmail(value: string): SetEmail {
    return { type: 'set-email', payload: value  };
} 

function setPassword(value: string): SetPassword {
    return { type: 'set-password', payload: value  };
}

const validateEmail: ValidateEmail = { type: 'validate-email' };

const validatePassword: ValidatePassword = { type: 'validate-password' };

const clearEmailError: ClearEmailError = { type: 'clear-email-error' };

const clearPasswordError: ClearPasswordError = { type: 'clear-password-error' };

const validateForm: ValidateForm = { type: 'validate-form' };

function setState(state: State): SetState {
    return { type: 'set-state', payload: state  };
}

const validateFieldAction = [
    validateEmail,
    validatePassword
];

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case 'set-email':
            return update2(state, 'value', 'email', action.payload);
        case 'set-password':
            return update2(state, 'value', 'password', action.payload);
        case 'validate-email':
            return update2(state, 'error', 'email',
                emailValidator(state.value.email)
            );
        case 'validate-password':
            return update2(state, 'error', 'password',
                passwordValidator(state.value.password)
            );
        case 'clear-email-error':
            return update2(state, 'error', 'email', Nothing);
        case 'clear-password-error':
            return update2(state, 'error', 'password', Nothing);
        case 'validate-form':
            return validateFieldAction.reduce(reducer, state);
        case 'set-state': return action.payload;
    }
}

function isValidForm(state: State): boolean {
    const keys = Object.keys(state.error) as Array<keyof State['error']>;
    return keys.every(k => state.error[k].isNothing());
}

const initialState: State = {
    value: {
        email: '',
        password: ''
    },
    error: {
        email: Nothing,
        password: Nothing
    }
};

export default function useFormController() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return {
        formState: state,
        formData: {
            email: state.value.email,
            password: state.value.password,
            emailError: emailErrorMessage(state.error.email),
            passwordError: passwordErrorMessage(state.error.password)
        },
        action: {
            setEmail: (value: string) => dispatch(setEmail(value)),
            setPassword: (value: string) => dispatch(setPassword(value)),
            validateEmail: () => dispatch(validateEmail),
            validatePassword: () => dispatch(validatePassword),
            clearEmailError: () => dispatch(clearEmailError),
            clearPasswordError: () => dispatch(clearPasswordError),
            setFormState: (state: State) => dispatch(setState(state))
        },
        validateForm: (state: State) => reducer(state, validateForm),
        isValidForm
    };
};