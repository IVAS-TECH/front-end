import React from 'react';
import NumberInput from '../../formControl/NumberInput';
import useFormData from '../../form/stencilForm/hook/useFormData';
import {
    setPanelsCountX,
    validatePanelsCountX,
    clearPanelsCountXError,
} from '../../form/stencilForm/hook/state';
import positiveNumberErrorMSG from '../../../errorMessage/positiveNumber';

const PanelsCountX: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.panelsCountX,
            error: positiveNumberErrorMSG(state.errors.panelsCountX)
        })
    );
    return (
        <NumberInput
            label="Panels count at X"
            fullWidth
            required
            value={value}
            error={error}
            onValueChange={v => dispatch(setPanelsCountX(v))}
            onFocus={() => dispatch(clearPanelsCountXError)}
            onBlur={() => dispatch(validatePanelsCountX)} />
    );
};

export default PanelsCountX;