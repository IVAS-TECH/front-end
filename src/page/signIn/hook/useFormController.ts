import React from 'react';
import { Maybe, Nothing } from 'purify-ts/Maybe'
import { EmailError, emailValidator } from '../../../formFieldValidator/email';
import { update2 } from '../../../utility/update';
import emailErrorMessage from '../../../errorMessage/email';

interface State {
    value: {
        email: string,
        password: string
    },
    error: {
        email: Maybe<EmailError>
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

interface ClearEmailError {
    type: 'clear-email-error'
}

type Action = SetEmail | SetPassword | ValidateEmail | ClearEmailError;

function reducer(state: State, action: Action) {
    switch(action.type) {
        case 'set-email':
            return update2(state, 'value', 'email', action.payload);
        case 'set-password':
            return update2(state, 'value', 'password', action.payload);
        case 'validate-email':
            return update2(state, 'error', 'email',
                emailValidator(state.value.email)
            );
        case 'clear-email-error':
            return update2(state, 'error', 'email', Nothing);
    }
}

const initialState: State = {
    value: {
        email: '',
        password: ''
    },
    error: {
        email: Nothing
    }
};

function setEmail(value: string): SetEmail {
    return { type: 'set-email', payload: value  };
} 

function setPassword(value: string): SetPassword {
    return { type: 'set-password', payload: value  };
}

const validateEmail: ValidateEmail = { type: 'validate-email' };

const clearEmailError: ClearEmailError = { type: 'clear-email-error' };

export default function useFormController() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return {
        formData: {
            email: state.value.email,
            password: state.value.password,
            emailError: emailErrorMessage(state.error.email)
        },
        setEmail: (value: string) => dispatch(setEmail(value)),
        setPassword: (value: string) => dispatch(setPassword(value)),
        validateEmail: () => dispatch(validateEmail),
        clearEmailError: () => dispatch(clearEmailError)
    };
};