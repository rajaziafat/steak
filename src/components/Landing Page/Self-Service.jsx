import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {RiLockPasswordLine} from 'react-icons/ri';
import {BsReceiptCutoff} from 'react-icons/bs';
import {SiHackaday} from 'react-icons/si';
import {MdImportantDevices} from 'react-icons/md';

function SelfService() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
            <Typography variant="h5" sx={{mt:13}}>Self-Service</Typography>
            <Typography variant="p" sx={{textAlign:'center',px:2}}>Access the most commonly utilized support tools.</Typography>
            <Box sx={{mt:6,width:'90%'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Item sx={{py:4,boxShadow:0}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <RiLockPasswordLine style={{fontSize:'48px',color:'#999'}}/>
                  <Typography variant="h6" sx={{color:'black',mt:3,fontSize:'18px'}}>Reset Password</Typography>
            <Typography variant="p" sx={{color:'#999'}}>Changes Account Login Password</Typography>
              </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Item sx={{py:4,boxShadow:0}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <BsReceiptCutoff style={{fontSize:'48px',color:'#999'}}/>
                  <Typography variant="h6" sx={{color:'black',mt:3,fontSize:'18px'}}>Deposit Not Received</Typography>
            <Typography variant="p" sx={{color:'#999'}}>Deposit not showing up in wallet?</Typography>
              </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Item sx={{py:4,boxShadow:0}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <SiHackaday style={{fontSize:'48px',color:'#999'}}/>
                  <Typography variant="h6" sx={{color:'black',mt:3,fontSize:'18px'}}>Account Hacked</Typography>
            <Typography variant="p" sx={{color:'#999'}}>Think your account has been hacked?</Typography>
              </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Item sx={{py:4,boxShadow:0}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <MdImportantDevices style={{fontSize:'48px',color:'#999'}}/>
                  <Typography variant="h6" sx={{color:'black',mt:3,fontSize:'18px'}}>Mobile Login</Typography>
            <Typography variant="p" sx={{color:'#999'}}>Manage you mobile login.</Typography>
              </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Item sx={{py:4,boxShadow:0}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <RiLockPasswordLine style={{fontSize:'48px',color:'#999'}}/>
                  <Typography variant="h6" sx={{color:'black',mt:3,fontSize:'18px'}}>Reset Password</Typography>
            <Typography variant="p" sx={{color:'#999'}}>Changes Account Login Password</Typography>
              </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Item sx={{py:4,boxShadow:0}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <BsReceiptCutoff style={{fontSize:'48px',color:'#999'}}/>
                  <Typography variant="h6" sx={{color:'black',mt:3,fontSize:'18px'}}>Deposit Not Received</Typography>
            <Typography variant="p" sx={{color:'#999'}}>Deposit not showing up in wallet?</Typography>
              </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Item sx={{py:4,boxShadow:0}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <SiHackaday style={{fontSize:'48px',color:'#999'}}/>
                  <Typography variant="h6" sx={{color:'black',mt:3,fontSize:'18px'}}>Account Hacked</Typography>
            <Typography variant="p" sx={{color:'#999'}}>Think your account has been hacked?</Typography>
              </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Item sx={{py:4,boxShadow:0}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <MdImportantDevices style={{fontSize:'48px',color:'#999'}}/>
                  <Typography variant="h6" sx={{color:'black',mt:3,fontSize:'18px'}}>Mobile Login</Typography>
            <Typography variant="p" sx={{color:'#999'}}>Manage you mobile login.</Typography>
              </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
        </Box>
    )
}

export default SelfService
