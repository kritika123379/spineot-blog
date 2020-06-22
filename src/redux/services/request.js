import axios from 'axios'
import Config from '../config'
import history from '../../customHistory'
// import { openGlobalSnackbar } from '../actions/snackBarAction';
// import { logout, setupRefreshTimer, callRefresh } from '../utils/GlobalFunctions';

/**
 * Request Wrapper with default success/error actions
 */
const requestWithToken = (options) => {
    /**
     * Create an Axios Client with defaults
     */
    // if(options.method === 'POST' || options.method === 'PUT' || options.method === 'DELETE' || options.method === 'PATCH'){

    // }
    console.log('options',options);
    const client = axios.create({
        baseURL: Config.API_URL,
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
        //  body: JSON.stringify(options.params)
        params: JSON.stringify([{ "title": "Blog 2",
        "_id": "my id",
        "description": "Testing of blog 2",
        "picture": "https://d24cgw3uvb9a9h.cloudfront.net/static/93994/image/Zoom_Blue_Logo.png",
        "user": "kritika madaan",
        "createdAt": "2020-06-21T19:25:33.461Z",
        "updatedAt": "2020-06-21T19:25:33.461Z"
    }])
    });
    // if(!!localStorage.getItem('businessId')){
    //     axios.defaults.header['x-peymynt-business-id'] = localStorage.getItem('businessId')
    // }

    const onSuccess = (response) => {
        return response.data;
    }

    const onError = async (error) => {
        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            if (error.response.status === 401 || error.response.status === 403) {
                //If refresh token expires
                // if(options.url.includes('refresh')){
                //     logout()
                // }else{
                //     //If other api's fails
                //     await callRefresh()
                //     setupRefreshTimer();
                //     requestWithToken(options);
                // }
            }
            if(error.response.status === 404){
                history.push('/404')
            }
            return Promise.reject(!!error.response.data ? error.response.data : error.response || error.message);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the
            // browser and an instance of
            // http.ClientRequest in node.js
            history.push('/app/error/500')

            return Promise.reject(error.request);
        } else {
            // Something else happened while setting up the request
            // triggered the error
            history.push('/app/error/500')
            return Promise.reject(error.message);
        }

    }

    return client(options)
        .then(onSuccess)
        .catch(onError);
}


export default requestWithToken;