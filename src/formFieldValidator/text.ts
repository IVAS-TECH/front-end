import isNotEmptyString from '../validator/isNotEmptyString';
import createValidator from '../utility/validate';

export enum TextError {
    Required = 'required'
};

export const textValidator = createValidator([
    { isValid: isNotEmptyString, error: TextError.Required }
]);

export default textValidator; 