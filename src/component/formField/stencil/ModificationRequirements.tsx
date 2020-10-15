import React from 'react';
import TextArea from '../../formControl/TextArea';

const Field: React.FC<{}> = () => (
    <TextArea
        initialRows={7}
        maxSymbolsPerRow={69}
        value={''}
        onValueChange={t => console.log(t)}
        label="Modification requirements"
        helperText="Please do describe all requirements for apertures modification and image positioning."
    />
);

export default Field;