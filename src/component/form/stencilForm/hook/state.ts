import FidushalMarksKind from '../../../../type/stencil/FidushalMarksKind';
import FidushalMarksSide from '../../../../type/stencil/FidushalMarksSide';
import ImagePosition from '../../../../type/stencil/ImagePosition';
import Position from '../../../../type/stencil/Position';
import SheetThickness from '../../../../type/stencil/SheetThickness';
import { Maybe, Nothing } from 'purify-ts';
import { PositiveNumberError } from '../../../../formFieldValidator/positiveNumber';
import { SelectError } from '../../../../formFieldValidator/select';
import { NonNegativeNumberError } from '../../../../formFieldValidator/nonNegative';
import { TextError } from '../../../../formFieldValidator/text';

interface State {
    values: {
        fileIsFromRackelSide: boolean,
        count: '' | number,
        sheetThickness: '' | SheetThickness,
        fudishalMarks: boolean,
        fudishalMarksKind: '' | FidushalMarksKind,
        fudishalMarksSide: '' | FidushalMarksSide,
        modificationsRequirements: string,
        includeTextFromRackelSide: boolean,
        textFromRackelSide: string,
        includeTextFromPCBSide: boolean,
        textFromPCBSide: string,
        multiply: boolean,
        panelsCountX: '' | number,
        stepX: '' | number,
        panelsCountY: '' | number,
        stepY: '' | number,
        position: '' | Position,
        imagePosition: '' | ImagePosition,
        nanoCoating: boolean,
        electrochemicalPolishing: boolean
    },
    errors: {
        count: Maybe<PositiveNumberError>,
        sheetThickness: Maybe<SelectError>,
        fidushalMarksKind: Maybe<SelectError>,
        fidushalMarksSide: Maybe<SelectError>,
        textFromRackelSide: Maybe<TextError>,
        textFromPCBSide: Maybe<TextError>,
        panelsCountX: Maybe<PositiveNumberError>,
        stepX: Maybe<NonNegativeNumberError>,
        panelsCountY: Maybe<PositiveNumberError>,
        stepY: Maybe<NonNegativeNumberError>,
        position: Maybe<SelectError>,
        imagePosition: Maybe<SelectError>
    }
}

const empty: State = {
    values: {
        fileIsFromRackelSide: false,
        count: 1,
        sheetThickness: '',
        fudishalMarks: false,
        fudishalMarksKind: '',
        fudishalMarksSide: '',
        modificationsRequirements: '',
        includeTextFromRackelSide: false,
        textFromRackelSide: '',
        includeTextFromPCBSide: false,
        textFromPCBSide: '',
        multiply: false,
        panelsCountX: 1,
        stepX: 0,
        panelsCountY: 1,
        stepY: 0,
        position: '',
        imagePosition: '',
        nanoCoating: false,
        electrochemicalPolishing: false
    },
    errors: {
        count: Nothing,
        sheetThickness: Nothing,
        fidushalMarksKind: Nothing,
        fidushalMarksSide: Nothing,
        textFromRackelSide: Nothing,
        textFromPCBSide: Nothing,
        panelsCountX: Nothing,
        stepX: Nothing,
        panelsCountY: Nothing,
        stepY: Nothing,
        position: Nothing,
        imagePosition: Nothing
    }
};

interface TogleFileSide {
    type: 'togle-file-side'
}

export const togleFileSide: TogleFileSide
    = { type: 'togle-file-side' };

interface SetCount {
    type: 'set-count',
    payload: '' | number
}

export function setCount(val: '' | number): SetCount {
    return {
        type: 'set-count',
        payload: val
    };
};

interface SetSheetThickness {
    type: 'set-sheet-thickness',
    payload: SheetThickness
}

export function setSheetThickness(thickness: SheetThickness): SetSheetThickness {
    return {
        type: 'set-sheet-thickness',
        payload: thickness
    }
};

interface TogleFidushalMarks {
    type: 'togle-fidushal-marks'
}

export const togleFidushalMarks: TogleFidushalMarks
    = { type: 'togle-fidushal-marks' };

interface SetFidushalMarksKind {
    type: 'set-fidushal-marks-kind',
    payload: FidushalMarksKind
};

export function setFidushalMarksKind(kind: FidushalMarksKind): SetFidushalMarksKind {
    return {
        type: 'set-fidushal-marks-kind',
        payload: kind
    }
};

interface SetFidushalMarksSide {
    type: 'set-fidushal-marks-side',
    payload: FidushalMarksSide
};

export function setFidushalMarksSide(side: FidushalMarksSide): SetFidushalMarksSide {
    return {
        type: 'set-fidushal-marks-side',
        payload: side
    }
};

interface SetModificationsRequirements {
    type: 'set-modifications-requirements',
    payload: string
}

export function setModificationsRequirements(reqs: string): SetModificationsRequirements {
    return {
        type: 'set-modifications-requirements',
        payload: reqs
    }
};

interface TogleTextFromRackelSide {
    type: 'togle-text-from-rackel-side',
}

export const togleTextFromRackelSide: TogleTextFromRackelSide
    = { type: 'togle-text-from-rackel-side' };

interface SetTextFromRackelSide {
    type: 'set-text-from-rackel-side',
    payload: string
}

export function setTextFromRackelSides(text: string): SetTextFromRackelSide {
    return {
        type: 'set-text-from-rackel-side',
        payload: text
    }
};

interface TogleTextFromPCBSide {
    type: 'togle-text-from-pcb-side',
}

export const togleTextFromPCBSide: TogleTextFromPCBSide
    = { type: 'togle-text-from-pcb-side' };

interface SetTextFromPCBSide {
    type: 'set-text-from-pcb-side',
    payload: string
}

export function setTextFromPCBSides(text: string): SetTextFromPCBSide {
    return {
        type: 'set-text-from-pcb-side',
        payload: text
    }
};

interface TogleMultiply {
    type: 'togle-multiply'
}

export const togleMultiply: TogleMultiply
    = { type: 'togle-multiply' };


interface SetPanelsCountX {
    type: 'set-panels-count-x',
    payload: '' | number
}

export function setPanelsCountX(val: '' | number): SetPanelsCountX {
    return {
        type: 'set-panels-count-x',
        payload: val
    };
};

interface SetStepX {
    type: 'set-step-x',
    payload: '' | number
}

export function setStepX(val: '' | number): SetStepX {
    return {
        type: 'set-step-x',
        payload: val
    };
};

interface SetPanelsCountY {
    type: 'set-panels-count-y',
    payload: '' | number
}

export function setPanelsCountY(val: '' | number): SetPanelsCountY {
    return {
        type: 'set-panels-count-y',
        payload: val
    };
};

interface SetStepY {
    type: 'set-step-y',
    payload: '' | number
}

export function setStepY(val: '' | number): SetStepY {
    return {
        type: 'set-step-y',
        payload: val
    };
};

interface SetPosition {
    type: 'set-position',
    payload: Position
}

export function setPosition(pos: Position): SetPosition {
    return {
        type: 'set-position',
        payload: pos
    }
};

interface SetImagePosition {
    type: 'set-image-position',
    payload: ImagePosition
}

export function setImagePosition(pos: ImagePosition): SetImagePosition {
    return {
        type: 'set-image-position',
        payload: pos
    }
};

interface TogleNanoCoating {
    type: 'togle-nano-coating',
}

export const togleNanoCoating: TogleNanoCoating
    = { type: 'togle-nano-coating' };

interface TogleElectrochemicalPolishing {
    type: 'togle-electrochemical-polishing',
}

export const togleElectrochemicalPolishing: TogleElectrochemicalPolishing
    = { type: 'togle-electrochemical-polishing' };