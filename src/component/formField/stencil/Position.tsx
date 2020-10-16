import React from 'react';
import Position from '../../../type/stencil/Position';
import createSelect from '../../formControl/Select';

const Select = createSelect<Position>();

const optionText: Record<Position, string> = {
    [Position.LayoutCentered]: 'Layout centered',
    [Position.PCBCentered]: 'PCB centered',
};

const options: Array<Position> = [
    Position.LayoutCentered,
    Position.PCBCentered
];

const Field: React.FC<{}> = () => (
    <Select
        required
        id="position-select"
        label="Position"
        value={''}  
        notSelectedText="Not selected"
        onValueChange={v => console.log(v)}
        options={options}
        optionText={optionText} />
);

export default Field;