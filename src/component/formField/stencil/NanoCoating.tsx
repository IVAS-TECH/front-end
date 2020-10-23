import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { togleNanoCoating} from '../../form/stencilForm/hook/state';

const NanoCoating: React.FC<{}> = () => {
    const [checked, dispatch] = useFormData(
        state => state.values.nanoCoating
    );
    return (
        <CheckboxWithLabel
            checked={checked}
            label="Nano coating"
            onToggle={() => dispatch(togleNanoCoating)} />
    );
};

export default NanoCoating;