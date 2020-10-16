import React from 'react';
import NumberInput from '../../formControl/NumberInput';

const XStep: React.FC<{}> = () => (
    <NumberInput
        label="X step (mm)"
        fullWidth
        required
        value={0}
        onValueChange={v => console.log(v)} />

);

export default XStep;