import React from 'react'
import { Button as ButtonType } from '../../../types/button'
import { StyledButton } from './index.styles'

const Button: React.FC<ButtonType> = ({ 
  label, 
  onClick, 
  primary = false,
  type = "button"
}) => {
  return (
    <StyledButton 
      onClick={onClick} 
      primary={primary}
      type={type}
    >
      { label }
    </StyledButton>
  )
}

export default Button