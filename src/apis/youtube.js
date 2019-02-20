import axios from 'axios';


const KEY = 'AIzaSyAnGilVGrFcD4pV_VxLUzvozPPkTgW2TCs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
