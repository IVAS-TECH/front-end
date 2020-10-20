import { PositiveNumberError } from '../formFieldValidator/positiveNumber';
import { Maybe } from 'purify-ts/Maybe'

function messageFor(error: PositiveNumberError): string {
    switch(error) {
        case PositiveNumberError.Required:
            return 'This field is required';
        case PositiveNumberError.Positive:
            return 'Minimal value for the field is 1';
    }
}

export default function message(error: Maybe<PositiveNumberError>): string | undefined {
    return error.mapOrDefault(messageFor, undefined);
};