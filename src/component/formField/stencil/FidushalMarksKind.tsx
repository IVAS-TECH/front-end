import React from 'react';
import FidushalMarksKind from '../../../type/stencil/FidushalMarksKind';
import createSelect from '../../formControl/Select';
import useFormData from '../../form/stencilForm/hook/useFormData';
import selectErrorMSG from '../../../errorMessage/select';
import { setFidushalMarksKind } from '../../form/stencilForm/hook/state';

const Select = createSelect<FidushalMarksKind>();

const optionText: Record<FidushalMarksKind, string> = {
    [FidushalMarksKind.Engraved]: 'Engraved',
    [FidushalMarksKind.Cut]: 'Cut',
};

const options: Array<FidushalMarksKind> = [
    FidushalMarksKind.Engraved,
    FidushalMarksKind.Cut
];

const Field: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.fidushalMarksKind,
            error: selectErrorMSG(state.errors.fidushalMarksKind)
        })
    );
    return (
        <Select
            required
            id="fidushal-marks-kind-select"
            label="Marks kind"
            value={value}
            error={error}  
            notSelectedText="Not selected"
            onValueChange={v => dispatch(setFidushalMarksKind(v))}
            options={options}
            optionText={optionText} />
    );
};

export default Field;