import Link from 'next/link';
import React from 'react'
import { Wrapper } from './index.styles';

interface Props {
  label: string;
  to: string;
  primary?: boolean;
}

const NavMenuItem: React.FC<Props> = ({ label, to, primary = false }) => {
  return (
    <Link href={to} passHref>
      <Wrapper primary={primary}>
        <p>{ label }</p>
      </Wrapper>
    </Link>
  )
}

export default NavMenuItem