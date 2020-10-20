import isNumber from '../validator/isNumber';
import isNonNegative from '../validator/isNonNegative';
import createValidator from '../utility/validate';

export enum NonNegativeNumberError {
    Required = 'required',
    NonNegative = 'non-negative'
};

export const positiveNumberValidator = createValidator([
    { isValid: isNumber, error: NonNegativeNumberError.Required },
    { isValid: isNonNegative, error: NonNegativeNumberError.NonNegative }
]);

export default positiveNumberValidator;  