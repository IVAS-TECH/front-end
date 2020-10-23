import React from 'react';
import Position from '../../../type/stencil/Position';
import createSelect from '../../formControl/Select';
import useFormData from '../../form/stencilForm/hook/useFormData';
import selectErrorMSG from '../../../errorMessage/select';
import { setPosition } from '../../form/stencilForm/hook/state';

const Select = createSelect<Position>();

const optionText: Record<Position, string> = {
    [Position.LayoutCentered]: 'Layout centered',
    [Position.PCBCentered]: 'PCB centered',
};

const options: Array<Position> = [
    Position.LayoutCentered,
    Position.PCBCentered
];

const Field: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.position,
            error: selectErrorMSG(state.errors.position)
        })
    );
    return (
        <Select
            required
            id="position-select"
            label="Position"
            value={value}
            error={error}  
            notSelectedText="Not selected"
            onValueChange={v => dispatch(setPosition(v))}
            options={options}
            optionText={optionText} />
    );
};

export default Field;