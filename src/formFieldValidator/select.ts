import isSelected from '../validator/isSelected'
import createValidator from '../utility/validate';

export enum SelectError {
    Required = 'required'
};

export const selectValidator = createValidator([
    { isValid: isSelected, error: SelectError.Required }
]);

export default selectValidator; 