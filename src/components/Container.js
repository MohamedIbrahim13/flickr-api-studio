import React, { useContext,useEffect } from "react";
import Gallery from "./Gallery";
import Loader from "./Loader";
import { PhotoContext } from "../context/PhotoContext";

const Container = ({searchTerm}) => {
  const {images,loadingStatus,imgSearch} = useContext(PhotoContext);
  useEffect(()=>{
    imgSearch(searchTerm);
  },[searchTerm,imgSearch]);
  return (
    <div className="photo-container">
      {loadingStatus ? <Loader /> : <Gallery images={images}/>}
    </div>
  );
};

export default Container;