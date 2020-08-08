import React, { ReactNode } from 'react';

interface IProps {
  href: string;
  children: ReactNode;
}

const A = ({ href, children }: IProps) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default A;
