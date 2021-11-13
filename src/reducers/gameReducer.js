const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: []
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case"FETCH_GAMES":
            return {...state,
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upcoming: action.payload.upcoming
            }
        default: {
            return {...state}
        }
    }

}

