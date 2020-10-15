import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';

const FidushalMarks: React.FC<{}> = () => (
    <CheckboxWithLabel
        checked={true}
        label="Add fidushal marks"
        onToggle={v => console.log(v)} />
);

export default FidushalMarks;