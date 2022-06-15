import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3k4cdjcOvVy3hwuLs-oWl2IPBBgD00nmr_8g2Qsk72A",
  },
});
