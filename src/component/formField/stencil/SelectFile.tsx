import React from 'react';
import Button from '../../Button';
import AttachFile from '@material-ui/icons/AttachFile';

const icon = <AttachFile />;

const SelectFile: React.FC<{}> = () => (
    <Button large text="Select file" endIcon={icon}/>
);

export default SelectFile;