import React from 'react';
import Grid from "@material-ui/core/Grid";
import SectionTitle from '../../SectionTitle';
import Divider from '../../Divider';
import SelectFile from '../../formField/stencil/SelectFile';
import FileSide from '../../formField/stencil/FileSide';

const Form: React.FC<{}> = () => (
    <form noValidate>
        <SectionTitle title="Template" />
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <SelectFile />
            </Grid>
            <Grid item xs={12}>
                <FileSide />
            </Grid>
        </Grid>
        <Divider />
    </form>
);

export default Form;