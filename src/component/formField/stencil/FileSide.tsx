import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { togleFileSide } from '../../form/stencilForm/hook/state';

const FileSide: React.FC<{}> = () => {
    const [checked, dispatch] = useFormData(
        state => state.values.fileIsFromRackelSide
    );
    return (
        <CheckboxWithLabel
            checked={checked}
            label="Is file with side from Rackel side?"
            onToggle={() => dispatch(togleFileSide)} />
    );
};

export default FileSide;