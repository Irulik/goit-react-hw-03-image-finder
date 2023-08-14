import React from 'react';
import { Dna } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => (
  <LoaderWrapper>
    <Dna
      visible={true}
      height={80}
      width={80}
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClassName="dna-wrapper" 
    />
  </LoaderWrapper>
);

export default Loader;

