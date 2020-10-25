import FiducialMarksKind from '../../../../type/stencil/FiducialMarksKind';
import FiducialMarksSide from '../../../../type/stencil/FiducialMarksSide';
import ImagePosition from '../../../../type/stencil/ImagePosition';
import Position from '../../../../type/stencil/Position';
import SheetThickness from '../../../../type/stencil/SheetThickness';
import { Maybe, Nothing } from 'purify-ts';
import { PositiveNumberError } from '../../../../formFieldValidator/positiveNumber';
import { SelectError } from '../../../../formFieldValidator/select';
import { NonNegativeNumberError } from '../../../../formFieldValidator/nonNegativeNumber';
import { TextError } from '../../../../formFieldValidator/text';

export interface State {
    values: {
        fileIsFromRackelSide: boolean,
        count: '' | number,
        sheetThickness: '' | SheetThickness,
        fiducialMarks: boolean,
        fiducialMarksKind: '' | FiducialMarksKind,
        fiducialMarksSide: '' | FiducialMarksSide,
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
        fiducialMarksKind: Maybe<SelectError>,
        fiducialMarksSide: Maybe<SelectError>,
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

export const empty: State = {
    values: {
        fileIsFromRackelSide: false,
        count: 1,
        sheetThickness: '',
        fiducialMarks: false,
        fiducialMarksKind: '',
        fiducialMarksSide: '',
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
        fiducialMarksKind: Nothing,
        fiducialMarksSide: Nothing,
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

interface TogleFiducialMarks {
    type: 'togle-fiducial-marks'
}

export const togleFiducialMarks: TogleFiducialMarks
    = { type: 'togle-fiducial-marks' };

interface SetFiducialMarksKind {
    type: 'set-fiducial-marks-kind',
    payload: FiducialMarksKind
};

export function setFiducialMarksKind(kind: FiducialMarksKind): SetFiducialMarksKind {
    return {
        type: 'set-fiducial-marks-kind',
        payload: kind
    }
};

interface SetFiducialMarksSide {
    type: 'set-fiducial-marks-side',
    payload: FiducialMarksSide
};

export function setFiducialMarksSide(side: FiducialMarksSide): SetFiducialMarksSide {
    return {
        type: 'set-fiducial-marks-side',
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

interface ValidateCount {
    type: 'validate-count'
}

export const validateCount: ValidateCount
    = { type: 'validate-count' };

interface ValidateSheetThickness {
    type: 'validate-sheet-thickness'
}

export const validateSheetThickness: ValidateSheetThickness
    = { type: 'validate-sheet-thickness' };

interface ValidateFiducialMarksKind {
    type: 'validate-fiducial-marks-kind'
}

export const validateFiducialMarksKind: ValidateFiducialMarksKind
    = { type: 'validate-fiducial-marks-kind' };

interface ValidateFiducialMarksSide {
    type: 'validate-fiducial-marks-side'
}

export const validateFiducialMarksSide: ValidateFiducialMarksSide
    = { type: 'validate-fiducial-marks-side' };

interface ValidateTextFromRackelSide {
    type: 'validate-text-from-rackel-side'
}

export const validateTextFromRackelSide: ValidateTextFromRackelSide
    = { type: 'validate-text-from-rackel-side' };

interface ValidateTextFromPCBSide {
    type: 'validate-text-from-pcb-side'
}

export const validateTextFromPCBSide: ValidateTextFromPCBSide
    = { type: 'validate-text-from-pcb-side' };

interface ValidatePanelsCountX {
    type: 'validate-panels-count-x'
}

export const validatePanelsCountX: ValidatePanelsCountX
    = { type: 'validate-panels-count-x' };


interface ValidateStepX {
    type: 'validate-step-x'
}

export const validateStepX: ValidateStepX
    = { type: 'validate-step-x' };

interface ValidatePanelsCountY {
    type: 'validate-panels-count-y'
}

export const validatePanelsCountY: ValidatePanelsCountY
    = { type: 'validate-panels-count-y' };


interface ValidateStepY {
    type: 'validate-step-y'
}

export const validateStepY: ValidateStepY
    = { type: 'validate-step-y' };

interface ValidatePosition {
    type: 'validate-position'
}

export const validatePosition: ValidatePosition
    = { type:'validate-position' };

interface ValidateImagePosition {
    type: 'validate-image-position'
}

export const validateImagePosition: ValidateImagePosition
    = { type:'validate-image-position' };

interface ClearCountError {
    type: 'clear-count-error'
}

export const clearCountError: ClearCountError
    = { type: 'clear-count-error' };

interface ClearTextFromRackelSideError {
    type: 'clear-text-from-rackel-side-error'
}

export const clearTextFromRackelSideError: ClearTextFromRackelSideError
    = { type: 'clear-text-from-rackel-side-error' };

interface ClearTextFromPCBSideError {
    type: 'clear-text-from-pcb-side-error'
}

export const clearTextFromPCBSideError: ClearTextFromPCBSideError
    = { type: 'clear-text-from-pcb-side-error' };

interface ClearPanelsCountXError {
    type: 'clear-panels-count-x-error'
}

export const clearPanelsCountXError: ClearPanelsCountXError
    = { type: 'clear-panels-count-x-error' };


interface ClearStepXError {
    type: 'clear-step-x-error'
}

export const clearStepXError: ClearStepXError
    = { type: 'clear-step-x-error' };

interface ClearPanelsCountYError {
    type: 'clear-panels-count-y-error'
}

export const clearPanelsCountYError: ClearPanelsCountYError
    = { type: 'clear-panels-count-y-error' };


interface ClearStepYError {
    type: 'clear-step-y-error'
}

export const clearStepYError: ClearStepYError
    = { type: 'clear-step-y-error' };

export type Action
    = TogleFileSide
    | SetCount
    | SetSheetThickness
    | TogleFiducialMarks
    | SetFiducialMarksKind
    | SetFiducialMarksSide
    | SetModificationsRequirements
    | TogleTextFromRackelSide
    | SetTextFromRackelSide
    | TogleTextFromPCBSide
    | SetTextFromPCBSide
    | TogleMultiply
    | SetPanelsCountX
    | SetStepX
    | SetPanelsCountY
    | SetStepY
    | SetPosition
    | SetImagePosition
    | TogleNanoCoating
    | TogleElectrochemicalPolishing
    | ValidateCount
    | ValidateSheetThickness
    | ValidateFiducialMarksKind
    | ValidateFiducialMarksSide
    | ValidateTextFromRackelSide
    | ValidateTextFromPCBSide
    | ValidatePanelsCountX
    | ValidateStepX
    | ValidatePanelsCountY
    | ValidateStepY
    | ValidatePosition
    | ValidateImagePosition
    | ClearCountError
    | ClearTextFromRackelSideError
    | ClearTextFromPCBSideError
    | ClearPanelsCountXError
    | ClearStepXError
    | ClearPanelsCountYError
    | ClearStepYError;