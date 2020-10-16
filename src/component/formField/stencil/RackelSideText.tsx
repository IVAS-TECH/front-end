import React from 'react';
import TextInput from '../../formControl/TextInput';

const RackelSideText: React.FC<{}> = () => (
    <TextInput
        value={''}
        onValueChange={v => console.log(v)}
        label="Rackel side text"
        required
        fullWidth />
);

export default RackelSideText;