import React from 'react';
import FidushalMarksSide from '../../../type/stencil/FidushalMarksSide';
import createSelect from '../../formControl/Select';

const Select = createSelect<FidushalMarksSide>();

const optionText: Record<FidushalMarksSide, string> = {
    [FidushalMarksSide.PCBSide]: 'PCB side',
    [FidushalMarksSide.RacelSide]: 'Rackel side',
    [FidushalMarksSide.BothSides]: 'From both sides'
};

const options: Array<FidushalMarksSide> = [
    FidushalMarksSide.PCBSide,
    FidushalMarksSide.RacelSide,
    FidushalMarksSide.BothSides
];

const Field: React.FC<{}> = () => (
    <Select
        required
        id="fidushal-marks-side-select"
        label="Marks side"
        value={''}  
        notSelectedText="Not selected"
        onValueChange={v => console.log(v)}
        options={options}
        optionText={optionText} />
);

export default Field;