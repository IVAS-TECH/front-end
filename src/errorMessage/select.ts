import { SelectError } from '../formFieldValidator/select';
import { Maybe } from 'purify-ts/Maybe'

function messageFor(error: SelectError): string {
    switch(error) {
        case SelectError.Required:
            return 'This field is required';
    }
}

export default function message(error: Maybe<SelectError>): string | undefined {
    return error.mapOrDefault(messageFor, undefined);
};