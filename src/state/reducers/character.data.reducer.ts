const characterReducer = (state={characters: []}, action: any) => {
    switch(action.type) {
        case 'ADD_CHARACTER':
            return Object.assign({}, state,
                {
                    characterData: [...state.characters, action.characters]
                });
            default:
                return state
    }
}

export default characterReducer