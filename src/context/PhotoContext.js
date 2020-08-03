import React,{createContext,useState} from 'react'
import axios from 'axios';
import {apiKey} from '../api/api';

export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
    const [images,setImages] = useState([]);
    const [loadingStatus,setLoading] = useState(true);
    const imgSearch = (query)=>{
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`).then(
            res=>{
                setImages(res.data.photos.photo);
                setLoading(false);
            }
        ).catch(err=>console.log("Encountered an error with fetching and parsing data",err))
    }
    return (
        <PhotoContext.Provider value={{images,loadingStatus,imgSearch}}>
            {props.children}
        </PhotoContext.Provider>
            
        
    )
}

export default PhotoContextProvider
