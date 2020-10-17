import isNotEmptyString from '../validator/isNotEmptyString';
import hasMaxLength from '../validator/hasMaxLength';
import hasMinLength from '../validator/hasMinLength';
import includesUpperCaseLetter from '../validator/includesUpperCaseLetter';
import includesLowerCaseLetter from '../validator/includesLowerCaseLetter';
import includesDigit from '../validator/includesDigit';
import isAlphaNum from '../validator/isSafeSymbol';
import createValidator from '../utility/validate';

export enum PasswordError {
    Required = 'required',
    Min = 'min',
    Max = 'max',
    UpperCaseLetter = 'upper-case-letter',
    LowerCaseLetter = 'lower-case-letter',
    Digit = 'digit',
    Symbol = 'symbol'
};

export const minLength = 8;

export const maxLength = 32;

export const passwordValidator = createValidator([
    { isValid: isNotEmptyString, error: PasswordError.Required },
    { isValid: isAlphaNum, error: PasswordError.Symbol },
    { isValid: hasMinLength(minLength), error: PasswordError.Min },
    { isValid: hasMaxLength(maxLength), error: PasswordError.Max },
    { isValid: includesUpperCaseLetter, error: PasswordError.UpperCaseLetter },
    { isValid: includesLowerCaseLetter, error: PasswordError.LowerCaseLetter },
    { isValid: includesDigit, error: PasswordError.Digit }
]);

export default passwordValidator;