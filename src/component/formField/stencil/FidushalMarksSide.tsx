import React from 'react';
import FidushalMarksSide from '../../../type/stencil/FidushalMarksSide';
import createSelect from '../../formControl/Select';
import useFormData from '../../form/stencilForm/hook/useFormData';
import selectErrorMSG from '../../../errorMessage/select';
import { setFidushalMarksSide } from '../../form/stencilForm/hook/state';

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

const Field: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.fidushalMarksSide,
            error: selectErrorMSG(state.errors.fidushalMarksSide)
        })
    );
    return (
        <Select
            required
            id="fidushal-marks-side-select"
            label="Marks side"
            value={value}
            error={error}  
            notSelectedText="Not selected"
            onValueChange={v => dispatch(setFidushalMarksSide(v))}
            options={options}
            optionText={optionText} />
    );
};

export default Field;