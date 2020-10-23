import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { togleFidushalMarks } from '../../form/stencilForm/hook/state';

const FidushalMarks: React.FC<{}> = () => {
    const [checked, dispatch] = useFormData(
        state => state.values.fidushalMarks
    );
    return(
        <CheckboxWithLabel
            checked={checked}
            label="Add fidushal marks"
            onToggle={() => dispatch(togleFidushalMarks)} />
    );
};

export default FidushalMarks;