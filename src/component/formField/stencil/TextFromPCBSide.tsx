import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';

const TextFromPCBSide: React.FC<{}> = () => (
    <CheckboxWithLabel
        checked={true}
        label="Add text from PCB side"
        onToggle={v => console.log(v)} />
);

export default TextFromPCBSide;