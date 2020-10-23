import React from 'react';
import NumberInput from '../../formControl/NumberInput';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { setStepX, validateStepX, clearStepXError } from '../../form/stencilForm/hook/state';
import nonNegativeNumberErrorMSG from '../../../errorMessage/nonNegativeNumber';

const XStep: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.stepX,
            error: nonNegativeNumberErrorMSG(state.errors.stepX)
        })
    );
    return (
        <NumberInput
            label="X step (mm)"
            fullWidth
            required
            value={value}
            error={error}
            onValueChange={v => dispatch(setStepX(v))}
            onFocus={() => dispatch(clearStepXError)}
            onBlur={() => dispatch(validateStepX)} />
    );
};

export default XStep;