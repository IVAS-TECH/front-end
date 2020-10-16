import React from 'react';
import TextInput from '../../formControl/TextInput';

const PCBSideText: React.FC<{}> = () => (
    <TextInput
        value={''}
        onValueChange={v => console.log(v)}
        label="PCB side text"
        required
        fullWidth />
);

export default PCBSideText;