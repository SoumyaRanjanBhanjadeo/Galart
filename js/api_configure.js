

import { urlEncode } from "./utils/urlEncode.js";



const API_KEY = "pLMvLPMXgve27DUVaxS89bh1PzhOXNOjZ0tYJdW8ffFXMFad697RirjV";

const headers = new Headers();
headers.append("Authorization", API_KEY);

const requestOptions = { headers };

const fetchData = async function (url, successCallback) {
    const response = await fetch(url, requestOptions);

    if(response.ok) {
        const data = await response.json();
        successCallback(data);
    }
}


let requestUrl = "";

const root = {
    default: "https://api.pexels.com/v1/",
    videos: "https://api.pexels.com/videos/"
}

export const client = {

    photos: {

        search(parameters, callback) {
            requestUrl = `${root.default}search?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },

        curated(parameters, callback) {
            fetchData(`${root.default}curated?${urlEncode(parameters)}`, callback);
        },

        detail(id, callback) {
            fetchData(`${root.default}photos/${id}`, callback);
        }

    },

    videos: {

        search(parameters, callback) {
            requestUrl = `${root.videos}search?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },

        popular(parameters, callback) {
            fetchData(`${root.videos}popular?${urlEncode(parameters)}`, callback);
        },

        detail(id, callback) {
            fetchData(`${root.videos}videos/${id}`, callback);
        }

    },

    collections: {

        featured(parameters, callback) {
            requestUrl = `${root.default}collections/featured?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },

        detail(id, parameters, callback) {
            requestUrl = `${root.default}/collections/${id}?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        }

    }

}