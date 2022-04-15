import React from 'react'
import NavMenuItem from '../../atoms/NavMenuItem'
import { Container, Menu, Title } from './index.styles'

const Navbar: React.FC = () => {
  return (
    <Container>
      <Title>BLOG</Title>

      <Menu>
        <NavMenuItem
          label='Home'
          to="/"
        />
        <NavMenuItem
          label='Write'
          to="/write"
          primary
        />
      </Menu>
    </Container>
  )
}

export default Navbar