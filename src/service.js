import axios from "axios";


export default {
    getData(url) {
        return {
          getResponseData: data => axios.get(url)
        };
      },
      
};