import React from 'react';
import NumberInput from '../../formControl/NumberInput';
import useFormData from '../../form/stencilForm/hook/useFormData';
import {
    setPanelsCountY,
    validatePanelsCountY,
    clearPanelsCountYError,
} from '../../form/stencilForm/hook/state';
import positiveNumberErrorMSG from '../../../errorMessage/positiveNumber';

const PanelsCountY: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.panelsCountY,
            error: positiveNumberErrorMSG(state.errors.panelsCountY)
        })
    );
    return (
        <NumberInput
            label="Panels count at Y"
            fullWidth
            required
            value={value}
            error={error}
            onValueChange={v => dispatch(setPanelsCountY(v))}
            onFocus={() => dispatch(clearPanelsCountYError)}
            onBlur={() => dispatch(validatePanelsCountY)} />
    );
};

export default PanelsCountY;