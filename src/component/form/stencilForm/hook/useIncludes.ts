import React from 'react';
import { StencilForm } from '../FormData';

interface Include {
    fiducialMarks: boolean,
    rackelSideText: boolean,
    pcbSideText: boolean,
    multiply: boolean
}

function useIncludes(): Include {
    const { state } = React.useContext(StencilForm);
    return {
        fiducialMarks: state.values.fiducialMarks,
        rackelSideText: state.values.includeTextFromRackelSide,
        pcbSideText: state.values.includeTextFromPCBSide,
        multiply: state.values.multiply
    };
}

export default useIncludes;