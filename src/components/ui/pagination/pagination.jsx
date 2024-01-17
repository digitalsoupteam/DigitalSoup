import React from 'react';
import { StyledPAgintaion, PaginationButton, Count } from './styled';

const Pagination = ({
  className,
  max,
  currentCount,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <StyledPAgintaion className={className}>
      <PaginationButton onClick={onPrevClick}>{'<'}</PaginationButton>
      <Count>
        {currentCount} of {max}
      </Count>
      <PaginationButton onClick={onNextClick}>{'>'}</PaginationButton>
    </StyledPAgintaion>
  );
};

export default Pagination;
