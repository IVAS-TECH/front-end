import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { togleElectrochemicalPolishing} from '../../form/stencilForm/hook/state';

const ElectrochemicalPolishing: React.FC<{}> = () => {
    const [checked, dispatch] = useFormData(
        state => state.values.electrochemicalPolishing
    );
    return (
        <CheckboxWithLabel
            checked={checked}
            label="Electrochemical polishing"
            onToggle={() => dispatch(togleElectrochemicalPolishing)} />
    );
};

export default ElectrochemicalPolishing;