import styled from 'styled-components';

export const ImageGalleryItemWrapper = styled.li` 
  /* border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */
    border-radius: 16px;
    border: 2px solid rgba(185, 228, 201, 0.5);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    transform: scale(1);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    cursor: pointer;
`;

export const ImageGalleryItemImage = styled.img` 
  width: 100%;
  height: -webkit-fill-available;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;