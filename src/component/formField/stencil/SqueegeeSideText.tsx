import React from 'react';
import TextInput from '../../formControl/TextInput';
import useFormData from '../../form/stencilForm/hook/useFormData';
import {
    setTextFromSqueegeeSides,
    validateTextFromSqueegeeSide,
    clearTextFromSqueegeeSideError
} from '../../form/stencilForm/hook/state';
import textErrorMSG from '../../../errorMessage/text';

const SqueegeeSideText: React.FC<{}> = () => {
    const [ { value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.textFromSqueegeeSide,
            error: textErrorMSG(state.errors.textFromSqueegeeSide)
        })
    );
    return (
        <TextInput
            value={value}
            error={error}
            onValueChange={v => dispatch(setTextFromSqueegeeSides(v))}
            label="Squeegee side text"
            required
            fullWidth
            onFocus={() => dispatch(clearTextFromSqueegeeSideError)}
            onBlur={() => dispatch(validateTextFromSqueegeeSide)}    
        />
    );
};

export default SqueegeeSideText;