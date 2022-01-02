const jobReducer = (jobs = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    default:
      return jobs;
  }
};

export default jobReducer;
