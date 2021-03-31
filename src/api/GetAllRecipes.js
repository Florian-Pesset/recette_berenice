import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const GetAllRecipes = (setAllRecipes, setErrorServer) => {
  axios
    .get(`${REACT_APP_API_URL}/recipes`)
    .then((res) => {
      setAllRecipes(res.data);
    })
    .catch((err) => setErrorServer(err.message));
};

export default GetAllRecipes;
