import { EmailError } from '../formFieldValidator/email';
import { Maybe } from 'purify-ts/Maybe'

function messageFor(error: EmailError): string {
    switch(error) {
        case EmailError.Required:
            return 'This field is required';
        case EmailError.Email:
            return 'This is not a valid email address';
    }
}

export default function message(error: Maybe<EmailError>): string | undefined {
    return error.mapOrDefault(messageFor, undefined);
};