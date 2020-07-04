import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../action-type/action-type';

const initialStateRequestRobots = {
    isPending: false,
    robots: [],
    error: ''
}

// 1. REQUESTING ROBOTS
export const requestRobots = (state = initialStateRequestRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                robots: action.data,
                isPending: false
            }
        case REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                error: action.error,
                isPending: false
            }
        default:
            return state;
    }
}