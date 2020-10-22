import React from 'react';
import reducer from './hook/reducer';
import { State, Action, empty as emptyForm } from './hook/state';

export const StencilForm = React.createContext<{
    state: State,
    dispatch: React.Dispatch<Action>
}>({ state: emptyForm, dispatch: () => {} });

const FormData : React.FC<{ children: JSX.Element }>
= ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, emptyForm);
    const ctx = React.useMemo(() => ({ state, dispatch }), [state]);
    return (
        <StencilForm.Provider value={ctx}>
            {children}
        </StencilForm.Provider>
    );
};

export default FormData;

