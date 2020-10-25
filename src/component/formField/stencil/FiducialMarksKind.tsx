import React from 'react';
import FiducialMarksKind from '../../../type/stencil/FiducialMarksKind';
import createSelect from '../../formControl/Select';
import useFormData from '../../form/stencilForm/hook/useFormData';
import selectErrorMSG from '../../../errorMessage/select';
import { setFiducialMarksKind } from '../../form/stencilForm/hook/state';

const Select = createSelect<FiducialMarksKind>();

const optionText: Record<FiducialMarksKind, string> = {
    [FiducialMarksKind.Engraved]: 'Engraved',
    [FiducialMarksKind.Cut]: 'Cut',
};

const options: Array<FiducialMarksKind> = [
    FiducialMarksKind.Engraved,
    FiducialMarksKind.Cut
];

const Field: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.fiducialMarksKind,
            error: selectErrorMSG(state.errors.fiducialMarksKind)
        })
    );
    return (
        <Select
            required
            id="fiducial-marks-kind-select"
            label="Marks kind"
            value={value}
            error={error}  
            notSelectedText="Not selected"
            onValueChange={v => dispatch(setFiducialMarksKind(v))}
            options={options}
            optionText={optionText} />
    );
};

export default Field;