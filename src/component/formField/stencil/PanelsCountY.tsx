import React from 'react';
import NumberInput from '../../formControl/NumberInput';

const PanelsCountX: React.FC<{}> = () => (
    <NumberInput
        label="Panels count at Y"
        fullWidth
        required
        value={1}
        onValueChange={v => console.log(v)} />

);

export default PanelsCountX;