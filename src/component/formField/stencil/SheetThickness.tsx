import React from 'react';
import SheetThickness from '../../../type/stencil/SheetThickness';
import createSelect from '../../formControl/Select';
import useFormData from '../../form/stencilForm/hook/useFormData';
import selectErrorMSG from '../../../errorMessage/select';
import { setSheetThickness } from '../../form/stencilForm/hook/state';

const Select = createSelect<SheetThickness>();

const micro: (n: number) => string = n => `${n} μm`; 

const optionText: Record<SheetThickness, string> = {
    [SheetThickness.MM30]: micro(30),
    [SheetThickness.MM40]: micro(40),
    [SheetThickness.MM50]: micro(50),
    [SheetThickness.MM80]: micro(80),
    [SheetThickness.MM90]: micro(90),
    [SheetThickness.MM100]: micro(100),
    [SheetThickness.MM110]: micro(110),
    [SheetThickness.MM120]: micro(120),
    [SheetThickness.MM130]: micro(130),
    [SheetThickness.MM150]: micro(150),
    [SheetThickness.MM180]: micro(180),
    [SheetThickness.MM200]: micro(200),
    [SheetThickness.MM250]: micro(250),
    [SheetThickness.MM300]: micro(300)
};

const options: Array<SheetThickness> = [
    SheetThickness.MM30,
    SheetThickness.MM40,
    SheetThickness.MM50,
    SheetThickness.MM80,
    SheetThickness.MM90,
    SheetThickness.MM100,
    SheetThickness.MM110,
    SheetThickness.MM120,
    SheetThickness.MM130,
    SheetThickness.MM150,
    SheetThickness.MM180,
    SheetThickness.MM200,
    SheetThickness.MM250,
    SheetThickness.MM300
];

const Field: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.sheetThickness,
            error: selectErrorMSG(state.errors.sheetThickness)
        })
    );
    return (
        <Select
            required
            id="sheet-thickness-select"
            label="Sheet thickness (μm)"
            value={value}
            error={error}
            notSelectedText="Not selected"
            onValueChange={v => dispatch(setSheetThickness(v))}
            options={options}
            optionText={optionText} />
    );
};

export default Field;