import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { togleTextFromSqueegeeSide } from '../../form/stencilForm/hook/state';

const TextFromSqueegeeSide: React.FC<{}> = () => {
    const [checked, dispatch] = useFormData(
        state => state.values.includeTextFromSqueegeeSide
    );
    return (
        <CheckboxWithLabel
            checked={checked}
            label="Add text from Squeegee side"
            onToggle={() => dispatch(togleTextFromSqueegeeSide)} />
    );
};

export default TextFromSqueegeeSide;