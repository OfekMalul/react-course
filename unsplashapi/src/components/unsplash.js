import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xC2n7TR94su7HqB7WNgcW5FqpjAPaaUVhUE4-iynZw0",
  },
});
