import api from "../service";


export const simpleAction = () => dispatch => {
  dispatch({ type: "GET_LOADING_STATUS" });
  return api
    .getData("http://localhost:5000/CardData")
    .getResponseData("")
    .then(res => {
        return dispatch({
          type: "SIMPLE_ACTION",
          value: res.data
        });
     
    })
    .catch(err => {
      // return dispatch({
      //   type: "ACCOUNT_SUMMARY_BALANCE_DATA_ERROR",
      //   value: "error"
      // });
    });
};