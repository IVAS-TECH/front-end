import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { togleMultiply } from '../../form/stencilForm/hook/state';

const Multiply: React.FC<{}> = () => {
    const [checked, dispatch] = useFormData(
        state => state.values.multiply
    );
    return (
        <CheckboxWithLabel
            checked={checked}
            label="Add multiply"
            onToggle={() => dispatch(togleMultiply)} />
    );
};

export default Multiply;