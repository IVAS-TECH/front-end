import isNumber from '../validator/isNumber';
import isPositive from '../validator/isPositive';
import createValidator from '../utility/validate';

export enum PositiveNumberError {
    Required = 'required',
    Positive = 'positive'
};

export const positiveNumberValidator = createValidator([
    {isValid: isNumber, error: PositiveNumberError.Required },
    { isValid: isPositive, error: PositiveNumberError.Positive }
]);

export default positiveNumberValidator;  