import React from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import comparator from './../../utility/compareProps';

export interface CheckboxWithLabelProps extends CheckboxProps {
    label: string,
    labelAtStart?: boolean
};

const changeableProps: Array<keyof CheckboxWithLabelProps> = [
    'disabled',
    'checked',
    'label'
];

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
    label,
    labelAtStart,
    ...checkboxProps
}) => (
    <FormControlLabel
        label={label}
        labelPlacement={labelAtStart ? 'start' : 'end'}
        control={<Checkbox {...checkboxProps} />}
    />
);

const compare = comparator<CheckboxWithLabelProps>(changeableProps);

const CheckboxWithLabelMemo = React.memo(CheckboxWithLabel, compare);

export default CheckboxWithLabelMemo;