import React from 'react';
import ZoomableImage from './ZoomableImage';
import './Gallery.css';

const Gallery = ({pictures}) => {
  return (
    <section>
      <h1>Imagery!</h1>
      <ul className={'Gallery-photo-grid'}>
        {pictures.map(picture => (
          <li>
            <ZoomableImage
              title={picture.title}
              url={picture.url}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
