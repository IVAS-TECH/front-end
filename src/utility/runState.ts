const runState
    : <S>(updates: Array<(_: S) => S>, state: S) => S
    = (updates, state) => updates.reduce(
        (curr, update) => update(curr),
        state
    );

export default runState;