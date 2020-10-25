import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { togleFiducialMarks } from '../../form/stencilForm/hook/state';

const FiducialMarks: React.FC<{}> = () => {
    const [checked, dispatch] = useFormData(
        state => state.values.fiducialMarks
    );
    return(
        <CheckboxWithLabel
            checked={checked}
            label="Add fiducial marks"
            onToggle={() => dispatch(togleFiducialMarks)} />
    );
};

export default FiducialMarks;