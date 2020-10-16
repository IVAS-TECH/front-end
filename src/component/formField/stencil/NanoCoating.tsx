import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';

const NanoCoating: React.FC<{}> = () => (
    <CheckboxWithLabel
        checked={false}
        label="Nano coating"
        onToggle={v => console.log(v)} />
);

export default NanoCoating;