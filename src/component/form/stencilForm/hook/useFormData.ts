import React from 'react';
import { State, Action } from './state';
import { StencilForm } from '../FormData';

function useFormData<Extract>(getData: (state: State) => Extract): [Extract, React.Dispatch<Action>] {
    const { state, dispatch } = React.useContext(StencilForm);
    return [getData(state), dispatch];
}

export default useFormData;