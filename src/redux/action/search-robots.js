import { CHANGE_SEARCH_FIELD } from '../action-type/action-type';

export const searchRobots = text => ({
    type: CHANGE_SEARCH_FIELD, //action type
    text: text //the data that is sent to the reducer, which is the "text" that the user enters on the search field
})