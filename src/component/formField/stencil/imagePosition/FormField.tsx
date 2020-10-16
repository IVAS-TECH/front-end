import React from 'react';
import ImagePositionSelect from './ImagePositionSelect';

const FormField: React.FC<{}> = () => (
    <ImagePositionSelect
       label="Image position on template"
        value={''}
        onValueChange={p => console.log(p)}
        required
        error="Required" />
);

export default FormField;