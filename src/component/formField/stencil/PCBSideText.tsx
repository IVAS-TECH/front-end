import React from 'react';
import TextInput from '../../formControl/TextInput';
import useFormData from '../../form/stencilForm/hook/useFormData';
import {
    setTextFromPCBSides,
    validateTextFromPCBSide,
    clearTextFromPCBSideError
} from '../../form/stencilForm/hook/state';
import textErrorMSG from '../../../errorMessage/text';

const PCBSideText: React.FC<{}> = () => {
    const [ { value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.textFromPCBSide,
            error: textErrorMSG(state.errors.textFromPCBSide)
        })
    );
    return (
        <TextInput
            value={value}
            error={error}
            onValueChange={v => dispatch(setTextFromPCBSides(v))}
            label="PCB side text"
            required
            fullWidth
            onFocus={() => dispatch(clearTextFromPCBSideError)}
            onBlur={() => dispatch(validateTextFromPCBSide)}    
        />
    );
};

export default PCBSideText;