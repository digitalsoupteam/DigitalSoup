import React from 'react';
import { StyledCircle } from './styled';

const Circle = ({ ...props }) => {
  return <StyledCircle {...props}></StyledCircle>;
};

export default Circle;
