
import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';

export interface CheckboxProps {
    checked: boolean,
    className?: string,
    secondary?: boolean,
    disabled?: boolean,
    id?: string,
    onToggle: (checked: boolean) => void,
}

const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    onToggle,
    secondary,
    ...rest
}) => (
    <MuiCheckbox
        {...rest}
        checked={checked}
        color={secondary ? 'secondary' : 'primary'}
        size="medium"
        onChange={_ => onToggle(!checked)}
    />
);

export default Checkbox;