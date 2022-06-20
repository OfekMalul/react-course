import axios from "axios";
const KEY = "AIzaSyAbPUgJSv6bGSKKZYOeINlqI1xSnFI1f6U";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", type: "video", maxResults: "5", key: KEY },
});
