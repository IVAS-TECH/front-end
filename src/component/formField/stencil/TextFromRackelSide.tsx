import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { togleTextFromRackelSide } from '../../form/stencilForm/hook/state';

const TextFromRackelSide: React.FC<{}> = () => {
    const [checked, dispatch] = useFormData(
        state => state.values.includeTextFromRackelSide
    );
    return (
        <CheckboxWithLabel
            checked={checked}
            label="Add text from Rackel side"
            onToggle={() => dispatch(togleTextFromRackelSide)} />
    );
};

export default TextFromRackelSide;