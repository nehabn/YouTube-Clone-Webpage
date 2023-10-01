import axios from 'axios';

const KEY = 'AIzaSyBqFXnG10vdFQxMM55LLkn0_Xku7Z9y4jM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});