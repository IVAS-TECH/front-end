import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import { horizontal, vertical  } from './Position';
import ImagePosition from '../../../../type/stencil/ImagePosition'; 
import comparator from './../../../../utility/compareProps';

export type Value = '' | ImagePosition;

export interface ImagePositionSelectProps {
    label: string,
    disabled?: boolean,
    required?: boolean,
    error?: string
    secondary?: boolean,
    value: Value,
    onValueChange: (value: ImagePosition) => void
};

const changeableProps: Array<keyof ImagePositionSelectProps> = [
    'label',
    'disabled',
    'error',
    'value'
];

const ImagePositionSelect: React.FC<ImagePositionSelectProps> = ({
    label,
    disabled,
    required,
    error,
    secondary,
    value,
    onValueChange
}) => {
    const isError = !!error;
    const color = secondary ? 'secondary' : 'primary';
    return (
        <>
            <FormLabel
                disabled={disabled}
                required={required}
                error={isError}
                color={color}>
                {label}
            </FormLabel>
            <Grid container direction='row' justify='space-around' alignItems='center'>
                <Grid container direction='column' item xs={6}>
                    <Grid item xs={6}>
                        <Radio
                            color={color}
                            disabled={disabled}
                            required={required}
                            checked={value === ImagePosition.Horizontal}
                            onChange={() => onValueChange(ImagePosition.Horizontal)} />
                    </Grid>
                    <Grid item xs={6}>
                        {horizontal}
                    </Grid>
                </Grid>
                <Grid container direction="column" item xs={6}>
                    <Grid item xs={6}>
                        <Radio
                            color={color}
                            disabled={disabled}
                            required={required}
                            checked={value === ImagePosition.Vertical}
                            onChange={() => onValueChange(ImagePosition.Vertical)} />
                    </Grid>
                    <Grid item xs={6}>
                        {vertical}
                    </Grid>
                </Grid>
            </Grid>
            {error && <FormHelperText
                disabled={disabled}
                required={required}
                error={isError}
                color={color}>
                {error}
            </FormHelperText>}
        </>
    );
};

const compare = comparator<ImagePositionSelectProps>(changeableProps);

const Memo = React.memo(ImagePositionSelect, compare);

export default Memo;