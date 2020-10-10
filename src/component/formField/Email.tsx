import React from 'react';
import TextInput, { TextInputProps } from './../formControl/TextInput';

type EmailProps = Pick<TextInputProps,
    'className' |
    'value' |
    'onValueChange' |
    'onFocus' |
    'onBlur' |
    'error'
>;

const Email: React.FC<EmailProps> = (props) => (
    <TextInput
        {...props}
        autoFocus
        fullWidth
        name="email"
        required
        type="email"
        label="Email address"
    />
);

export default Email;