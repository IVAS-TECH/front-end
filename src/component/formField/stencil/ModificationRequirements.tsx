import React from 'react';
import TextArea from '../../formControl/TextArea';
import useFormData from '../../form/stencilForm/hook/useFormData';
import { setModificationsRequirements } from '../../form/stencilForm/hook/state';

const Field: React.FC<{}> = () => {
    const [value, dispatch] = useFormData(
        state => state.values.modificationsRequirements
    );
    return (
        <TextArea
            initialRows={7}
            maxSymbolsPerRow={68}
            value={value}
            onValueChange={text => dispatch(setModificationsRequirements(text))}
            label="Modification requirements"
            helperText="Please do describe all requirements for apertures modification and image positioning."
        />
    );
};

export default Field;