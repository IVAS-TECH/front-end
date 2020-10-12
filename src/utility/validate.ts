import { Maybe, Just, Nothing } from 'purify-ts/Maybe'

export interface ValidatorEntry<Data, Error> {
    isValid: (data: Data) => boolean,
    error: Error
};

export type Validator<Data, Error> = (data: Data) => Maybe<Error>;

const createValidator: <Data, Error>(validators: Array<ValidatorEntry<Data, Error>>) => Validator<Data, Error>
= validators => data => {
    for(const { isValid, error } of validators) {
        if(!isValid(data)) {
            return Just(error);
        }
    }
    return Nothing;
};

export default createValidator;