import React from 'react';
import CheckboxWithLabel from '../../formControl/CheckboxWithLabel';

const FileSide: React.FC<{}> = () => (
    <CheckboxWithLabel
        checked={false}
        label="Is file with side from Rackel side?"
        onToggle={v => console.log(v)} />
);

export default FileSide;