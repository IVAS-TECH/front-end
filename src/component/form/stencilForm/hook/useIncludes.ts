import React from 'react';
import { StencilForm } from '../FormData';

interface Include {
    fidushalMarks: boolean,
    rackelSideText: boolean,
    pcbSideText: boolean,
    multiply: boolean
}

function useIncludes(): Include {
    const { state } = React.useContext(StencilForm);
    return {
        fidushalMarks: state.values.fidushalMarks,
        rackelSideText: state.values.includeTextFromRackelSide,
        pcbSideText: state.values.includeTextFromPCBSide,
        multiply: state.values.multiply
    };
}

export default useIncludes;