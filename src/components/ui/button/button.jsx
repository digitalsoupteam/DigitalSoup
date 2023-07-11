import React from 'react';
import StyledButton from './styled';

const Button = ({ className, children, link, onClick, type, ...props }) => {
  return (
    <StyledButton
      className={className}
      {...props}
      {...(link ? { to: link } : { as: 'button', onClick, type: 'button' })}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
