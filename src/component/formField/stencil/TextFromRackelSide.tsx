import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';

const TextFromRackelSide: React.FC<{}> = () => (
    <CheckboxWithLabel
        checked={true}
        label="Add text from Rackel side"
        onToggle={v => console.log(v)} />
);

export default TextFromRackelSide;