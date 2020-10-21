const conditionalUpdate
    : <State>(
        cond: (state: State) => boolean,
        update: (state: State) => State
    ) => (state: State) => State
    = (cond, update) => (state) =>
        cond(state) ? update(state) : state;

export default conditionalUpdate;