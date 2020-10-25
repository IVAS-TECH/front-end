import React from 'react';
import Grid from "@material-ui/core/Grid";
import SectionTitle from '../../SectionTitle';
import Divider from '../../Divider';
import SelectFile from '../../formField/stencil/SelectFile';
import FileSide from '../../formField/stencil/FileSide';
import Count from '../../formField/stencil/Count';
import SheetThickness from '../../formField/stencil/SheetThickness';
import FiducialMarks from '../../formField/stencil/FiducialMarks';
import FiducialMarksKind from '../../formField/stencil/FiducialMarksKind';
import FiducialMarksSide from '../../formField/stencil/FiducialMarksSide';
import ModificationRequirements from '../../formField/stencil/ModificationRequirements';
import TextFromRackelSide from '../../formField/stencil/TextFromRackelSide';
import RackelSideText from '../../formField/stencil/RackelSideText';
import TextFromPCBSide from '../../formField/stencil/TextFromPCBSide';
import PCBSideText from '../../formField/stencil/PCBSideText';
import Multiply from '../../formField/stencil/Multiply';
import PanelsCountX from '../../formField/stencil/PanelsCountX';
import PanelsCountY from '../../formField/stencil/PanelsCountY';
import XStep from '../../formField/stencil/XStep';
import YStep from '../../formField/stencil/YStep';
import NanoCoating from '../../formField/stencil/NanoCoating';
import ElectrochemicalPolishing from '../../formField/stencil/ElectrochemicalPolishing';
import Position from '../../formField/stencil/Position';
import ImagePosition from '../../formField/stencil/imagePosition/FormField';
import FormData from './FormData';
import useIncludes from './hook/useIncludes';

const Form: React.FC<{}> = () => {
    const include = useIncludes();
    return (
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
            <SectionTitle title="Fiducial marks" />
            <FiducialMarks />
            {include.fiducialMarks &&
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FiducialMarksKind />
                    </Grid>
                    <Grid item xs={6}>
                        <FiducialMarksSide />
                    </Grid>
                </Grid>
            }
            <Divider />
            <SectionTitle title="Apertures mudification and image positioning requirements" />
            <ModificationRequirements />
            <Divider />
            <SectionTitle title="Text" />
            <TextFromRackelSide />
            <br/>
            {include.rackelSideText && <RackelSideText />}
            <TextFromPCBSide />
            {include.pcbSideText && <PCBSideText />}
            <Divider />
            <SectionTitle title="Multiply" />
            <Multiply />
            {include.multiply &&
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <PanelsCountX />
                    </Grid>
                    <Grid item xs={6}>
                        <XStep />
                    </Grid>
                    <Grid item xs={6}>
                        <PanelsCountY />
                    </Grid>
                    <Grid item xs={6}>
                        <YStep />
                    </Grid>
                </Grid>
            }
            <Divider />
            <SectionTitle title="Position" />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Position />
                </Grid>
                <Grid item xs={6}>
                    <ImagePosition />
                </Grid>
            </Grid>
            <Divider />
            <SectionTitle title="Additional processing" />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <NanoCoating />
                </Grid>
                <Grid item xs={6}>
                    <ElectrochemicalPolishing />
                </Grid>
            </Grid>
        </form>
    );
};

const WithData: React.FC<{}> = () => (
    <FormData>
        <Form />
    </FormData>
);

export default WithData;