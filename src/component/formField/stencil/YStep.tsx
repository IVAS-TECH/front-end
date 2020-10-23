import React from 'react';
import NumberInput from '../../formControl/NumberInput';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { setStepY, validateStepY, clearStepYError } from '../../form/stencilForm/hook/state';
import nonNegativeNumberErrorMSG from '../../../errorMessage/nonNegativeNumber';

const YStep: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.stepY,
            error: nonNegativeNumberErrorMSG(state.errors.stepY)
        })
    );
    return (
        <NumberInput
            label="Y step (mm)"
            fullWidth
            required
            value={value}
            error={error}
            onValueChange={v => dispatch(setStepY(v))}
            onFocus={() => dispatch(clearStepYError)}
            onBlur={() => dispatch(validateStepY)} />
    );
};

export default YStep;