import React from 'react';
import StyledButton from './styled';
import { Link } from 'react-router-dom';

const Button = ({ className, children, link, to, onClick, type, ...props }) => {
  return (
    <StyledButton
      className={className}
      {...props}
      {...(link ? { href: link } : { as: 'button', onClick, type: 'button' })}
      {...(to ? { as: Link, to: to } : null)}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
