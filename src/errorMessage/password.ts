import { PasswordError, minLength, maxLength } from '../formFieldValidator/password';
import { Maybe } from 'purify-ts/Maybe';

const minLengthErrorMessage = `Input length is at least ${minLength} symbols`;

const maxLengthErrorMessage = `Input length is at most ${maxLength} symbols`;

function messageFor(error: PasswordError): string {
    switch(error) {
        case PasswordError.Required:
            return 'This field is required';
        case PasswordError.Symbol:
            return 'Input accepts only letters, digits and - (dash) and _ (under score)';
        case PasswordError.Min: return minLengthErrorMessage;
        case PasswordError.Max: return maxLengthErrorMessage;
        case PasswordError.UpperCaseLetter:
            return 'Input must contain at least 1 upper case letter';
        case PasswordError.LowerCaseLetter:
            return 'Input must contain at least 1 lower case letter';
        case PasswordError.Digit:
            return 'Input must contain at least 1 digit';
    }
}

export default function message(error: Maybe<PasswordError>): string | undefined {
    return error.mapOrDefault(messageFor, undefined);
};