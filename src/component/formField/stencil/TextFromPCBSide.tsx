import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { togleTextFromPCBSide } from '../../form/stencilForm/hook/state';

const TextFromPCBSide: React.FC<{}> = () => {
    const [checked, dispatch] = useFormData(
        state => state.values.includeTextFromPCBSide
    );
    return (
        <CheckboxWithLabel
            checked={checked}
            label="Add text from PCB side"
            onToggle={() => dispatch(togleTextFromPCBSide)} />
    );
};

export default TextFromPCBSide;