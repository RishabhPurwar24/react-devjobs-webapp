import * as api from "../api";

//ACTIONS CREATOR
export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchJobs();
    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
