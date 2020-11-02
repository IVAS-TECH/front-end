import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import comparator from './../../utility/compareProps';

export type MuiProps
= Pick<TextFieldProps,
    'autoComplete' |
    'autoFocus' |
    'className' |
    'disabled' |
    'fullWidth' |
    'helperText' |
    'id' |
    'multiline' |
    'name' |
    'placeholder' |
    'required' |
    'rows' |
    'type'>;

export interface TextInputProps extends MuiProps {
    secondary?: boolean,
    outlined?: boolean,
    value: string,
    label: string,
    error?: string,
    endAdornment?: JSX.Element,
    onValueChange: (value: string) => void,
    onFocus?: () => void,
    onBlur?: () => void
};

const changeableProps: Array<keyof TextInputProps> = [
    'disabled',
    'helperText',
    'placeholder',
    'error',
    'value',
    'label',
    'type'
];

export function handleOnChangeEvent(currentValue: string, onValueChange?: (_: string) => void) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const eventValue = event.target.value;
        if((eventValue !== currentValue) && onValueChange) {
            onValueChange(eventValue);
        }
    }
};

const TextInput: React.FC<TextInputProps> = ({
    value,
    onValueChange,
    error,
    secondary,
    outlined,
    helperText,
    endAdornment,
    ...rest
}) => (
    <TextField
        {...rest}
variant={outlined ? 'outlined' : 'filled'}
        margin="normal"
        value={value}
        error={!!error}
        helperText={error || helperText}
        color={secondary ? 'secondary' : 'primary'}
        InputProps={{ endAdornment }}
        onChange={handleOnChangeEvent(value, onValueChange)}
    />
);

const compare = comparator<TextInputProps>(changeableProps);

const TextInputMemo = React.memo(TextInput, compare);

export default TextInputMemo;
