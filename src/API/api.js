import axios from "axios";
import {useEffect} from "react";

const MyKey = 'AIzaSyBoIL9UE5amz03LL9CGXi_eTgBshlT5IYQ'
export const getBucks = {
    getOllBucks(filter){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${filter.name}&orderBy=${filter.friend}&&key=${MyKey}&maxResults=${filter.number}`)

    },
    getBook(id){
        return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    }


}