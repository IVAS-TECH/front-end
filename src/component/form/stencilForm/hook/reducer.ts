import { Nothing } from 'purify-ts/Maybe'
import { update2 } from '../../../../utility/update';
import runState from '../../../../utility/runState';
import conditional from '../../../../utility/conditional';
import equalMaybes from '../../../../utility/equalMaybes';
import { State, empty as emptyForm, Action } from './state';
import nonNegativeNumberValidator from '../../../../formFieldValidator/nonNegativeNumber';
import positiveNumberValidator from '../../../../formFieldValidator/positiveNumber';
import selectValidator from '../../../../formFieldValidator/select';
import textValidator from '../../../../formFieldValidator/text';

type BooleanValueKey = { [K in keyof State['values']] -?: State['values'][K] extends boolean ? K : never }[keyof State['values']];

const togle: (state: State, key: BooleanValueKey) => State
    = (state, key) => update2(state, 'values', key, !state.values[key]);

const togleFidushalMarks
    : (state: State) => State
    = state => runState([
        s => togle(s, 'fidushalMarks'),
        conditional(
            s => s.values.fidushalMarks === false,
            t => runState([
                s => update2(s, 'values', 'fidushalMarksKind', ''),
                s => update2(s, 'values', 'fidushalMarksSide', ''),
                s => update2(s, 'errors', 'fidushalMarksKind', Nothing, equalMaybes),
                s => update2(s, 'errors', 'fidushalMarksSide', Nothing, equalMaybes)
            ], t)
        ),
    ], state);

const togleTextFromRackelSide
    : (state: State) => State
    = state => runState([
        s => togle(s, 'includeTextFromRackelSide'),
        conditional(
            s => s.values.includeTextFromRackelSide === false,
            t => runState([
                s => update2(s, 'values', 'textFromRackelSide', ''),
                s => update2(s, 'errors', 'textFromRackelSide', Nothing, equalMaybes)
            ], t)
        )
    ], state);

const togleTextFromPCBSide
    : (state: State) => State
    = state => runState([
        s => togle(s, 'includeTextFromPCBSide'),
        conditional(
            s => s.values.includeTextFromPCBSide === false,
            t => runState([
                s => update2(s, 'values', 'textFromPCBSide', ''),
                s => update2(s, 'errors', 'textFromPCBSide', Nothing, equalMaybes)
            ], t)
        )
    ], state);

const togleMultiply
    : (state: State) => State
    = state => runState([
        s => togle(s, 'multiply'),
        conditional(
            s => s.values.multiply === false,
            t => runState([
                s => update2(s, 'values', 'panelsCountX', emptyForm.values.panelsCountX),
                s => update2(s, 'errors', 'panelsCountX', Nothing, equalMaybes),
                s => update2(s, 'values', 'stepX', emptyForm.values.stepX),
                s => update2(s, 'errors', 'stepX', Nothing, equalMaybes),
                s => update2(s, 'values', 'panelsCountY', emptyForm.values.panelsCountY),
                s => update2(s, 'errors', 'panelsCountY', Nothing, equalMaybes),
                s => update2(s, 'values', 'stepY', emptyForm.values.stepY),
                s => update2(s, 'errors', 'stepY', Nothing, equalMaybes)
            ], t)
        )
    ], state);

export default function reducer(state: State, action: Action): State {
    switch(action.type) {
        case 'togle-file-side':
            return togle(state, 'fileIsFromRackelSide');
        case 'set-count':
            return update2(state, 'values', 'count', action.payload);
        case 'set-sheet-thickness':
            return update2(state, 'values', 'sheetThickness', action.payload);
        case 'togle-fidushal-marks':
            return togleFidushalMarks(state);
        case 'set-fidushal-marks-kind':
            return update2(state, 'values', 'fidushalMarksKind', action.payload);
        case 'set-fidushal-marks-side':
            return update2(state, 'values', 'fidushalMarksSide', action.payload);
        case 'set-modifications-requirements':
            return update2(state, 'values', 'modificationsRequirements', action.payload);
        case 'togle-text-from-rackel-side':
            return togleTextFromRackelSide(state);
        case 'set-text-from-rackel-side':
            return update2(state, 'values', 'textFromRackelSide', action.payload);
        case 'togle-text-from-pcb-side':
            return togleTextFromPCBSide(state);
        case 'set-text-from-pcb-side':
            return update2(state, 'values', 'textFromPCBSide', action.payload);
        case 'togle-multiply':
            return togleMultiply(state);
        case 'set-panels-count-x':
            return update2(state, 'values', 'panelsCountX', action.payload);
        case 'set-step-x':
            return update2(state, 'values', 'stepX', action.payload);
        case 'set-panels-count-y':
            return update2(state, 'values', 'panelsCountY', action.payload);
        case 'set-step-y':
            return update2(state, 'values', 'stepY', action.payload);
        case 'set-position':
            return update2(state, 'values', 'position', action.payload);
        case 'set-image-position':
            return update2(state, 'values', 'imagePosition', action.payload);
        case 'togle-nano-coating':
            return togle(state, 'nanoCoating');
        case 'togle-electrochemical-polishing':
            return togle(state, 'electrochemicalPolishing');
        case 'validate-count':
            return update2(state, 'errors', 'count',
                positiveNumberValidator(state.values.count),
                equalMaybes
            );
        case 'validate-sheet-thickness':
            return update2(state, 'errors', 'sheetThickness',
                selectValidator(state.values.sheetThickness),
                equalMaybes
            );
        case 'validate-fidushal-marks-kind':
            return update2(state, 'errors', 'fidushalMarksKind',
                selectValidator(state.values.fidushalMarksKind),
                equalMaybes
            );
        case 'validate-fidushal-marks-side':
            return update2(state, 'errors', 'fidushalMarksSide',
                selectValidator(state.values.fidushalMarksSide),
                equalMaybes
            );
        case 'validate-text-from-rackel-side':
            return update2(state, 'errors', 'textFromRackelSide',
                textValidator(state.values.textFromRackelSide),
                equalMaybes
            );
        case 'validate-text-from-pcb-side':
            return update2(state, 'errors', 'textFromPCBSide',
                textValidator(state.values.textFromPCBSide),
                equalMaybes
            );
        case 'validate-panels-count-x':
            return update2(state, 'errors', 'panelsCountX',
                positiveNumberValidator(state.values.panelsCountX),
                equalMaybes
            );
        case 'validate-step-x':
            return update2(state, 'errors', 'stepX',
                nonNegativeNumberValidator(state.values.stepX),
                equalMaybes
            );
        case 'validate-panels-count-y':
            return update2(state, 'errors', 'panelsCountY',
                positiveNumberValidator(state.values.panelsCountY),
                equalMaybes
            );
        case 'validate-step-y':
            return update2(state, 'errors', 'stepY',
                nonNegativeNumberValidator(state.values.stepY),
                equalMaybes
            );
        case 'validate-position':
            return update2(state, 'errors', 'position',
                selectValidator(state.values.position),
                equalMaybes
            );
        case 'validate-image-position':
            return update2(state, 'errors', 'imagePosition',
                selectValidator(state.values.imagePosition),
                equalMaybes
            );
        case 'clear-count-error':
            return update2(state, 'errors', 'count', Nothing, equalMaybes);
        case 'clear-text-from-rackel-side-error':
            return update2(state, 'errors', 'textFromRackelSide', Nothing, equalMaybes);
        case 'clear-text-from-pcb-side-error':
            return update2(state, 'errors', 'textFromPCBSide', Nothing, equalMaybes);
        case 'clear-panels-count-x-error':
            return update2(state, 'errors', 'panelsCountX', Nothing, equalMaybes);
        case 'clear-step-x-error':
            return update2(state, 'errors', 'stepX', Nothing, equalMaybes);
        case 'clear-panels-count-y-error':
            return update2(state, 'errors', 'panelsCountY', Nothing, equalMaybes);
        case 'clear-step-y-error':
            return update2(state, 'errors', 'stepY', Nothing, equalMaybes);
    }
};