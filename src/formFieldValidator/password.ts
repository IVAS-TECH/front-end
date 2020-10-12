import isNotEmptyString from '../validator/isNotEmptyString';
import hasMaxLength from '../validator/hasMaxLength';
import hasMinLength from '../validator/hasMinLength';
import includesCapitalLetter from '../validator/includesCapitalLetter';
import includesSmallLetter from '../validator/includesSmallLetter';
import includesDigit from '../validator/includesDigit';
import isAlphaNum from '../validator/isSafeSymbol';
import createValidator from '../utility/validate';

export enum PasswordError {
    Required,
    Min,
    Max,
    CapitalLetter,
    SmallLetter,
    Digit,
    Symbol
};

export const minLength = 8;
export const maxLength = 32;

export const passwordValidator = createValidator([
    { isValid: isNotEmptyString, error: PasswordError.Required },
    { isValid: isAlphaNum, error: PasswordError.Symbol },
    { isValid: hasMinLength(minLength), error: PasswordError.Min },
    { isValid: hasMaxLength(maxLength), error: PasswordError.Max },
    { isValid: includesCapitalLetter, error: PasswordError.CapitalLetter },
    { isValid: includesSmallLetter, error: PasswordError.SmallLetter },
    { isValid: includesDigit, error: PasswordError.Digit }
]);

export default passwordValidator;