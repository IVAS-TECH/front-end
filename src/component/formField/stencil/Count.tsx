import React from 'react';
import NumberInput from '../../formControl/NumberInput';
import useFormData from '../../form/stencilForm/hook/useFormData';
import positiveNumber from '../../../errorMessage/positiveNumber';
import { setCount, validateCount, clearCountError } from '../../form/stencilForm/hook/state';

const Count: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(state => ({
        value: state.values.count,
        error: positiveNumber(state.errors.count)
    }));
    return (
        <NumberInput
            label="Count"
            fullWidth
            required
            value={value}
            error={error}
            onFocus={() => dispatch(clearCountError)}
            onBlur={() => dispatch(validateCount)}
            onValueChange={v => dispatch(setCount(v))} />
    );
};

export default Count;