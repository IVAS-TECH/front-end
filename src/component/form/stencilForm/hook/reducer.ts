import { Maybe, Nothing } from 'purify-ts/Maybe'
import { update2 } from '../../../../utility/update';
import runState from '../../../../utility/runState';
import conditional from '../../../../utility/conditional';
import equalMaybes from '../../../../utility/equalMaybes';
import { State, empty as emptyForm, Action } from './state';

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
        default: return state;
    }
};