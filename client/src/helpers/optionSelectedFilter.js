

export const optionSelectedFilter = (valueInput, propStateReducer, updateStateFilter) => {
    if (valueInput === 'all') {
        updateStateFilter(propStateReducer)
    }
    else if (valueInput === 'phrases') {
        const phrasesCats = propStateReducer.filter(value => value.type === valueInput);
        updateStateFilter(phrasesCats);
    } else {
        const tasks = propStateReducer.filter(value => value.status);
        updateStateFilter(tasks);
    }
}