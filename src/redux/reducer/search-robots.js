import { CHANGE_SEARCH_FIELD } from '../action-type/action-type';

// STATES
const initialStateSearch = {
    searchField: ''
}

// SEARCHING ROBOTS - Reducers
export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD: //whenever the search field changes returns the below action
            return {
                ...state,
                searchField: action.text
            }
        default:
            return state;
    }
}