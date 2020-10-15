import React from 'react';
import FidushalMarksKind from '../../../type/stencil/FidushalMarksKind';
import createSelect from '../../formControl/Select';

const Select = createSelect<FidushalMarksKind>();

const optionText: Record<FidushalMarksKind, string> = {
    [FidushalMarksKind.Engraved]: 'Engraved',
    [FidushalMarksKind.Cut]: 'Cut',
};

const options: Array<FidushalMarksKind> = [
    FidushalMarksKind.Engraved,
    FidushalMarksKind.Cut
];

const Field: React.FC<{}> = () => (
    <Select
        required
        id="fidushal-marks-kind-select"
        label="Marks kind"
        value={''}  
        notSelectedText="Not selected"
        onValueChange={v => console.log(v)}
        options={options}
        optionText={optionText} />
);

export default Field;