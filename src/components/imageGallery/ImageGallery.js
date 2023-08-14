import { ImageGalleryWrapper } from './ImageGallery.styled';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ImageGalleryWrapper>
 
      {images.map((image, index) => (
        <ImageGalleryItem
          onClick={onImageClick}
          image={image}
          key={index}
        />
      ))}

  </ImageGalleryWrapper>
);

export default ImageGallery;
