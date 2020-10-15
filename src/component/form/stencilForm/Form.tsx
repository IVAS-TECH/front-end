import React from 'react';
import Grid from "@material-ui/core/Grid";
import SectionTitle from '../../SectionTitle';
import Divider from '../../Divider';
import SelectFile from '../../formField/stencil/SelectFile';
import FileSide from '../../formField/stencil/FileSide';
import Count from '../../formField/stencil/Count';
import SheetThickness from '../../formField/stencil/SheetThickness';
import FidushalMarks from '../../formField/stencil/FidushalMarks';
import FidushalMarksKind from '../../formField/stencil/FidushalMarksKind';
import FidushalMarksSide from '../../formField/stencil/FidushalMarksSide';
import ModificationRequirements from '../../formField/stencil/ModificationRequirements';

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
            <Grid item xs={6}>
                <Count />
            </Grid>
            <Grid item xs={6}>
                <SheetThickness />
            </Grid>
        </Grid>
        <Divider />
        <SectionTitle title="Fidushal marks" />
        <FidushalMarks />
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <FidushalMarksKind />
            </Grid>
            <Grid item xs={6}>
                <FidushalMarksSide />
            </Grid>
        </Grid>
        <Divider />
        <SectionTitle title="Apertures mudification and image positioning requirements" />
        <ModificationRequirements />
        <Divider />
    </form>
);

export default Form;