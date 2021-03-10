import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [state, setState] = useState({
    conditions: [],
  });

  useEffect(() => {
    localStorage.clear();
    axios
      // .get(`http://localhost:5000/api/condition`)//from local host
      .get(
        `https://gh3f4o13vd.execute-api.us-east-1.amazonaws.com/dev/api/condition`
      ) // from aws
      .then((res) => {
        setState((prev) => ({
          ...prev,
          conditions: res.data.conditions,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    state,
  };
};

export default useApplicationData;
