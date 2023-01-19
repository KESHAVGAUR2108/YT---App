import axios from 'axios';

const KEY = 'AIzaSyBcaG9YHTc_2GWLp2HP9fG4JVfrKTUkze0';

export default axios.create({
       baseURL : 'https://www.googleapis.com/youtube/v3',
        params : {
            part : 'snippet',
            maxResults : 5,
            key : KEY,
            client_id : "648493965334-dtb8bcbeacobr0aomrkl8r4tslt6bkaa.apps.googleusercontent.com"
        }
    }
);