import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";


const Gallery = ({images}) => {
  const imagesComp=images.map(image => {
    let farm = image.farm;
    let server = image.server;
    let id = image.id;
    let secret = image.secret;
    let title = image.title;
    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return <Image url={url} key={id} alt={title} />;
  });

  return (
    <div>
      <ul>
        {images.length ? imagesComp: (<NoImages/>) }
      </ul>
      
    </div>
  );
};

export default Gallery;