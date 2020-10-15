import React from 'react';
import NumberInput from '../../formControl/NumberInput';

const Count: React.FC<{}> = () => (
    <NumberInput
        label="Count"
        fullWidth
        required
        value={1}
        onValueChange={v => console.log(v)} />

);

export default Count;