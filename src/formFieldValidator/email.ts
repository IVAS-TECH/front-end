import isNotEmptyString from '../validator/isNotEmptyString';
import isEmail from '../validator/isEmail';
import createValidator from '../utility/validate';

export enum EmailError {
    Required = 'required',
    Email = 'email'
};

export const emailValidator = createValidator([
    { isValid: isNotEmptyString, error: EmailError.Required },
    { isValid: isEmail, error: EmailError.Email }
]);

export default emailValidator;