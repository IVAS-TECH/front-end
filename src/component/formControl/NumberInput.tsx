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

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

function handleOnKeyPress(event: KeyboardEvent, value: number | '', integer: boolean) {
    switch(event.key) {
        case '.': {
            if(integer || value === '' || value.toString().includes('.')) {
                event.stopPropagation();
                event.preventDefault();
            }
            break;
        }
        case '+': {
            event.stopPropagation();
            event.preventDefault();
            break;
        }
        case '-': {
            if(value !== '') {
                event.stopPropagation();
                event.preventDefault();
            }
            break;
        }
        case 'e': {
            event.stopPropagation();
            event.preventDefault();
            break;
        }
        case '0': {
            if(value !== '') {
                if(value === 0) {
                    event.stopPropagation();
                    event.preventDefault();
                }
            }
            break;
        }
        default: {
            const first = event.key[0];
            if(first >= '1' && first <= '9') {
                if(value === 0) {
                    event.stopPropagation();
                    event.preventDefault();
                }
            } 
        }
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
        type="number"
        value={value}
        error={!!error}
        helperText={error || helperText}
        color={secondary ? 'secondary' : 'primary'}
        onChange={handleOnChangeEvent(value, onValueChange)}
        onKeyPress={(e: KeyboardEvent) => handleOnKeyPress(e, value, !floatingPoint)} />
);

const compare = comparator<NumberInputProps>(changeableProps);

const NumberInputMemo = React.memo(NumberInput, compare);

export default NumberInputMemo;