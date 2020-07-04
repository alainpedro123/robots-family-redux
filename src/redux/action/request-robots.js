import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../action-type/action-type';

export const requestRobots = () => dispatch => {
    dispatch({
        type: REQUEST_ROBOTS_PENDING  //dispatching the pending action
    })
    // Fetch call - Asynchronous
    fetch('https://jsonplaceholder.typicode.com/users') //fetching the users
        .then(response => response.json()) //receiving the users
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, data: data })) //in case it works
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, error: error })) //in case something fails
}