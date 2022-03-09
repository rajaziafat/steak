import React from 'react'
import { Box, ThemeProvider } from '@mui/system';
import Typography from '@mui/material/Typography';
import {GiCube} from 'react-icons/gi';
import {BiUserCircle} from 'react-icons/bi';
import {MdNotifications} from 'react-icons/md';
import {AiTwotoneSetting} from 'react-icons/ai';

function Nav() {
    
    return (
            <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0059B2',
          },
        },
      }}
    >
        
      <Box
        sx={{
          width: '100%',
          height: 60,
          bgcolor: 'rgba(153,153,153,1)',
          margin:'0px',
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          px:3,

        }}>  
      <Box sx={{display:'flex',alignItems:'center',}}>
          <GiCube style={{fontSize:'20px'}}/>
          <Typography variant="h5" sx={{ml:1,}}>StakeCube</Typography>
      </Box>
      <Box sx={{fontSize:'24px',display:'flex',alignItems:'center',justifyContent:'space-between',width:'100px',height:'30px',mt:1}}>
      <a href="#user" ><BiUserCircle/></a>
      <a href="#notification"><MdNotifications/></a>
      <a href="#setting"><AiTwotoneSetting/></a>
      </Box>
    </Box>
    </ThemeProvider>
    )
}

export default Nav
