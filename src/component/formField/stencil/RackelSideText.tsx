import React from 'react';
import TextInput from '../../formControl/TextInput';
import useFormData from '../../form/stencilForm/hook/useFormData';
import {
    setTextFromRackelSides,
    validateTextFromRackelSide,
    clearTextFromRackelSideError
} from '../../form/stencilForm/hook/state';
import textErrorMSG from '../../../errorMessage/text';

const RackelSideText: React.FC<{}> = () => {
    const [ { value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.textFromRackelSide,
            error: textErrorMSG(state.errors.textFromRackelSide)
        })
    );
    return (
        <TextInput
            value={value}
            error={error}
            onValueChange={v => dispatch(setTextFromRackelSides(v))}
            label="Rackel side text"
            required
            fullWidth
            onFocus={() => dispatch(clearTextFromRackelSideError)}
            onBlur={() => dispatch(validateTextFromRackelSide)}    
        />
    );
};

export default RackelSideText;