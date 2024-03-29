import {
  CHANGE_SEARCH_FILTER,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

export const setSearchFilter = (text) => ({
  type: CHANGE_SEARCH_FILTER,
  payload: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch(
    // "https://link_cloud_function"
    "https://jsonplaceholder.typicode.com/users"
  )
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};
