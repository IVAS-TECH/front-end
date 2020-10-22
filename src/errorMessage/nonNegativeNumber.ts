import { NonNegativeNumberError } from '../formFieldValidator/nonNegativeNumber';
import { Maybe } from 'purify-ts/Maybe'

function messageFor(error: NonNegativeNumberError): string {
    switch(error) {
        case NonNegativeNumberError.Required:
            return 'This field is required';
        case NonNegativeNumberError.NonNegative:
            return 'Minimal value for the field is 0';
    }
}

export default function message(error: Maybe<NonNegativeNumberError>): string | undefined {
    return error.mapOrDefault(messageFor, undefined);
};