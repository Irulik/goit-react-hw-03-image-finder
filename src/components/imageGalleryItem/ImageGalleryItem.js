import React from 'react';
import { ImageGalleryItemWrapper, ImageGalleryItemImage } from './ImageGalleryItem.styled'; 

const ImageGalleryItem = ({ image, onClick }) => (
  <ImageGalleryItemWrapper id={image.id} onClick={onClick}>
    <ImageGalleryItemImage
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
      className={ImageGalleryItemImage}
    />
  </ImageGalleryItemWrapper>
);

export default ImageGalleryItem;
