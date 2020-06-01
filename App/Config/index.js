// src/config/index.js


let configs =  {
  api: {
    host: "https://www.googleapis.com/calendar/v3/",
    apiToken :"AIzaSyBrDZ2wOk_LCGD0hhjID80xiDfyGFE8zd8",
    timeout: 20000,
  }
};

const API_HOST = configs.api.host;

export {
  API_HOST
}

export default configs