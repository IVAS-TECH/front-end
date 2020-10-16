import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';

const Multiply: React.FC<{}> = () => (
    <CheckboxWithLabel
        checked={true}
        label="Add multiply"
        onToggle={v => console.log(v)} />
);

export default Multiply;