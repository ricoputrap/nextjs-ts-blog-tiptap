import React from 'react'
import { Menu } from './index.styles';

interface Props {
  clickHandler: () => void;
  label: string;
  active?: boolean;
}

const EditorMenuItem: React.FC<Props> = ({ 
  clickHandler,
  label,
  active = false
}) => {

  return (
    <Menu onClick={clickHandler} active={active}>
      {label}
    </Menu>
  )
}

export default EditorMenuItem