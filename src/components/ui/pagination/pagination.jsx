import React from 'react';
import { StyledPAgintaion, PaginationButton, Count } from './styled';

const Pagination = ({ min, max, currentCount, onPrevClick, onNextClick }) => {
  return (
    <StyledPAgintaion>
      <PaginationButton onClick={onPrevClick}>{'<'}</PaginationButton>
      <Count>
        {currentCount} of {max}
      </Count>
      <PaginationButton onClick={onNextClick}>{'>'}</PaginationButton>
    </StyledPAgintaion>
  );
};

export default Pagination;
