import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {MdOutlineContactSupport} from 'react-icons/md';
import {BsReceiptCutoff} from 'react-icons/bs';
import Button from '@mui/material/Button';

function RequestHelp() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',pb:15}}>
            <Typography variant="h5" sx={{mt:13}}>Request Help</Typography>
            <Typography variant="p" sx={{textAlign:'center',px:2}}>Submit a support issue ticket if your seek additional assistance.</Typography>
            <Grid container spacing={2} sx={{display:"flex",justifyContent:'center',mt:2}}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item sx={{py:4,boxShadow:0}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <MdOutlineContactSupport style={{fontSize:'48px',color:'#999'}}/>
                  <Typography variant="h6" sx={{color:'black',mt:3,fontSize:'18px'}}>Create Support Ticket</Typography>
                  <Button className="btn" sx={{background:'#cccccc',mt:2,color:'black'}}>Create Ticket</Button>
              </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item sx={{py:4,boxShadow:0}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <BsReceiptCutoff style={{fontSize:'48px',color:'#999'}}/>
                  <Typography variant="h6" sx={{color:'black',mt:3,fontSize:'18px'}}>Manage Support Ticket</Typography>
                  <Button className="btn" sx={{background:'#cccccc',mt:2,color:'black'}}>Manage Ticket</Button>
              </Box>
          </Item>
        </Grid>
        </Grid>
        </Box>
    )
}

export default RequestHelp