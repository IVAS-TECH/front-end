import { TextError } from '../formFieldValidator/text';
import { Maybe } from 'purify-ts/Maybe'

function messageFor(error: TextError): string {
    switch(error) {
        case TextError.Required:
            return 'This field is required';
    }
}

export default function message(error: Maybe<TextError>): string | undefined {
    return error.mapOrDefault(messageFor, undefined);
};