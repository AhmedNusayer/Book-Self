import axios from "axios";

const GoogleApi = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksByTerm = (SearchTerm, setMovies) => {
  GoogleApi.get("", {
    params: {
      //api_key: "AIzaSyCefncWvP2qese0JixqGx3XcK8o7oc_JlA",
      q: SearchTerm,
    },
  }).then((response) => {
    console.log(response);
    setMovies(response.data.items);
  });
};

export { getBooksByTerm };
