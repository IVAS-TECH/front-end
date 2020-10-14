import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import comparator from '../../utility/compareProps';

export type MuiProps
= Pick<TextFieldProps,
    'className' |
    'disabled' |
    'fullWidth' |
    'helperText' |
    'id' |
    'name' |
    'placeholder' |
    'required' >;

export interface NumberInputProps extends MuiProps {
    secondary?: boolean,
    outlined?: boolean,
    floatingPoint?: boolean,
    value: number | '',
    label: string,
    error?: string,
    onValueChange: (value: number | '') => void,
    onFocus?: () => void,
    onBlur?: () => void
};

const changeableProps: Array<keyof NumberInputProps> = [
    'disabled',
    'helperText',
    'placeholder',
    'error',
    'value',
    'label'
];

function handleOnChangeEvent(
    currentValue: number | '',
    onValueChange: (_: number | '') => void
) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value: eventValue } = event.target;
        if(eventValue === '') {
            if(currentValue !== '') {
                onValueChange('');
            }
        } else {
            const eventNumberValue = Number(eventValue);
            if(!Number.isNaN(eventNumberValue)) {
                if(eventNumberValue !== currentValue) {
                    onValueChange(eventNumberValue);
                }
            }
        }
    }
}

function handleOnKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if(event.key === '.') {
        event.stopPropagation();
        event.preventDefault();
    }
}

const NumberInput: React.FC<NumberInputProps> = ({
    value,
    onValueChange,
    error,
    secondary,
    outlined,
    floatingPoint,
    helperText,
    ...rest
}) => (
    <TextField
        {...rest}
variant={(outlined ? 'outlined' : 'filled') as any /* Typescirpt bug! At version 4.0.3 there is no problem */}
        margin="normal"
        value={value}
        error={!!error}
        helperText={error || helperText}
        color={secondary ? 'secondary' : 'primary'}
        onChange={handleOnChangeEvent(value, onValueChange)}
        onKeyDown={floatingPoint ? undefined : handleOnKeyDown} />
);

const compare = comparator<NumberInputProps>(changeableProps);

const NumberInputMemo = React.memo(NumberInput, compare);

export default NumberInputMemo;