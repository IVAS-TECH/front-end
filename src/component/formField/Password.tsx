import React from 'react';
import TextInput, { TextInputProps } from './../formControl/TextInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

type PasswordProps = Pick<TextInputProps,
    'className' |
    'name' |
    'value' |
    'label' |
    'onValueChange' |
    'onFocus' |
    'onBlur' |
    'error'
>;

const Password: React.FC<PasswordProps> = (props) => {
    const [show, setShow] = React.useState(false);

    return (
        <TextInput
            {...props}
            fullWidth
            required
            type={show ? 'text' : 'password'}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={() => setShow(!show)}
                    >
                        {show ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            }
        />
    );
};

export default Password;