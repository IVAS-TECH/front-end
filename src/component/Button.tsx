import React from 'react';
import MuiButton from '@material-ui/core/Button';
import comparator from './../utility/compareProps';

export interface ButtonProps {
    text: string,
    onClick?: () => void,
    className?: string,
    disabled?: boolean,
    secondary?: boolean,
    fullWidth?: boolean,
    href?: string,
    large?: boolean,
    startIcon?: JSX.Element,
    outlined?: boolean
};

const changeableProps: Array<keyof ButtonProps> = [
    'text',
    'disabled'
];

const Button: React.FC<ButtonProps> = ({
    text,
    secondary,
    large,
    outlined,
    ...rest
}) => (
    <MuiButton
        {...rest}
        color={secondary ? 'secondary' : 'primary'}
        size={large ? 'large' : 'medium'}
        variant={outlined ? 'outlined' : 'contained'} >
        {text}
    </MuiButton>
);

const compare = comparator<ButtonProps>(changeableProps);

const ButtonMemo = React.memo(Button, compare);

export default ButtonMemo;