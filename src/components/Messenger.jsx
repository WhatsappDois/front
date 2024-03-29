import React from 'react'
import { AppBar, Box, Toolbar } from '@mui/material' 
import styled from '@emotion/styled';

import LoginDialog from './account/LoginDialog';

const Component = styled(Box)`
  height: 100vh;
  background-color: #DCDCDC;
`

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`

const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar>

        </Toolbar>
      </Header>
      <LoginDialog/>
    </Component>
  )
}

export default Messenger;