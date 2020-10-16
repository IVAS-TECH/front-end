import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';

const ElectrochemicalPolishing: React.FC<{}> = () => (
    <CheckboxWithLabel
        checked={false}
        label="Electrochemical polishing"
        onToggle={v => console.log(v)} />
);

export default ElectrochemicalPolishing;