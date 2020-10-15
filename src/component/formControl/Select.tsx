import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import comparator from './../../utility/compareProps';

interface FormControlProps {
    className?: string,
    secondary?: boolean,
    disabled?: boolean,
    error?: string,
    required?: boolean,
    id: string
}

export interface SelectProps<Value extends string | number> extends FormControlProps {
    helperText?: string,
    label: string,
    value: Value | '',
    onValueChange: (value: Value) => void,
    notSelectedText?: string,
    options: Array<Value>
    optionText: Record<Value, string>
};

function changeableProps<Value extends string | number>()
    : Array<keyof SelectProps<Value>> {
    return [
        'disabled',
        'helperText',
        'error',
        'value',
        'label',
        'notSelectedText',
        'optionText'
    ];
}

type ChangeEvent = React.ChangeEvent<{name?: string; value: unknown}>;

function handleOnChangeEvent<Value extends string | number>(currentValue: Value | '', onValueChange: (_: Value) => void) {
    return (event: ChangeEvent) => {
        const eventValue = event.target.value as Value | '';
        if(eventValue !== '' && currentValue !== eventValue) {
            onValueChange(eventValue);
        }
    };
}

function Select<Value extends string | number>({
    helperText,
    label,
    value,
    onValueChange,
    notSelectedText,
    options,
    optionText,
    className,
    secondary,
    disabled,
    error,
    required,
    id
}: SelectProps<Value>): JSX.Element {
    const isError = !!error;
    const hasHelper = !!helperText;
    return (
        <FormControl
            className={className}
            disabled={disabled}
            error={isError}
            required={required}
            id={id}
            color={secondary ? 'secondary' : 'primary'}
            fullWidth
            margin="normal"
            variant="filled"
            >
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <MuiSelect
                value={value}
                onChange={handleOnChangeEvent(value, onValueChange)}>
                {(notSelectedText && value === '') &&
                    <MenuItem value=''>
                        {notSelectedText}
                    </MenuItem>}
                {options.map(value => (
                    <MenuItem value={value} key={value}>
                        {optionText[value]}
                    </MenuItem>
                ))}           
            </MuiSelect>
            {(isError || hasHelper) &&  
            <FormHelperText>{error || helperText}</FormHelperText>}
        </FormControl>
    );
}

function create<Value extends string | number>() {
    const compare = comparator<SelectProps<Value>>(changeableProps<Value>());
    const S: React.FC<SelectProps<Value>> = Select;
    const SelectMemo = React.memo(S, compare);
    return SelectMemo;
}

export default create;