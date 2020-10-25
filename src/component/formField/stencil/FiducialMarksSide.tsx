import React from 'react';
import FiducialMarksSide from '../../../type/stencil/FiducialMarksSide';
import createSelect from '../../formControl/Select';
import useFormData from '../../form/stencilForm/hook/useFormData';
import selectErrorMSG from '../../../errorMessage/select';
import { setFiducialMarksSide } from '../../form/stencilForm/hook/state';

const Select = createSelect<FiducialMarksSide>();

const optionText: Record<FiducialMarksSide, string> = {
    [FiducialMarksSide.PCBSide]: 'PCB side',
    [FiducialMarksSide.RacelSide]: 'Rackel side',
    [FiducialMarksSide.BothSides]: 'From both sides'
};

const options: Array<FiducialMarksSide> = [
    FiducialMarksSide.PCBSide,
    FiducialMarksSide.RacelSide,
    FiducialMarksSide.BothSides
];

const Field: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.fiducialMarksSide,
            error: selectErrorMSG(state.errors.fiducialMarksSide)
        })
    );
    return (
        <Select
            required
            id="fiducial-marks-side-select"
            label="Marks side"
            value={value}
            error={error}  
            notSelectedText="Not selected"
            onValueChange={v => dispatch(setFiducialMarksSide(v))}
            options={options}
            optionText={optionText} />
    );
};

export default Field;