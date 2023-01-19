import axios from 'axios';

const KEY = 'AIzaSyBcaG9YHTc_2GWLp2HP9fG4JVfrKTUkze0';

export default axios.create({
       baseURL : 'https://www.googleapis.com/youtube/v3',
        params : {
            part : 'snippet',
            maxResults : 5,
            key : KEY
        }
    }
);