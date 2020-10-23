import React from 'react';
import ImagePositionSelect from './ImagePositionSelect';
import useFormData from '../../../form/stencilForm/hook/useFormData';
import selectErrorMSG from '../../../../errorMessage/select';
import { setImagePosition } from '../../../form/stencilForm/hook/state';

const FormField: React.FC<{}> = () => {
    const [{ value, error }, dispatch] = useFormData(
        state => ({
            value: state.values.imagePosition,
            error: selectErrorMSG(state.errors.imagePosition)
        })
    );
    return (
        <ImagePositionSelect
        label="Image position on template"
            value={value}
            onValueChange={pos => dispatch(setImagePosition(pos))}
            required
            error={error} />
    );
};

export default FormField;