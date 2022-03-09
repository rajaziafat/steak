import React,{useState} from 'react';
import Navbar from '../navbar/nav';
import { Box } from '@mui/system';
import {ImNotification} from 'react-icons/im';
import {AiOutlineClose} from 'react-icons/ai';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FaSearch} from 'react-icons/fa';
import SelfService from './Self-Service';
import FAQ from './FAQ';
import RequestHelp from './RequestHelp';
import Footer from './Footer';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Lading() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    const [check,setCheck]=useState(0)

    let handleClose=()=>{
        setCheck(check+1)
    }
    return (
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Navbar/>
            {check===0 &&(
            <Box className="clipy" sx={{background:'rgba(221,221,221,1)',display:'flex',alignItems:'center',justifyContent:'space-between',pl:5}}>
                <Box className="notification-div" sx={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'end',color:'gray'}}>
                    <Typography sx={{fontSize:'12px',display:'flex',alignItems:'center'}}>
                        <span style={{marginRight:'5px'}}><ImNotification style={{fontSize:'20px'}}/></span>
                        Urgent Notification Message Bar. Notify: SCC deposits will be locked until 1-12-2021 12:00 (UTC).
                    </Typography>
                    <Typography variant="h6" sx={{color:'black',ml:1,fontSize:'14px'}}><a href="#learn">Learn More</a></Typography>
                </Box>
                <Box className="path" sx={{width:'13%',height:'100%',background:'#cccccc',display:'flex',justifyContent:'center',alignItems:'center',pl:4,pt:1}} onClick={handleClose}>
                      <a href="#close"><AiOutlineClose/></a>
                </Box>
            </Box>
            )}
          <Typography variant="h4" sx={{mt:3}}>Support</Typography>
          <Grid container spacing={1} sx={{display:'flex',justifyContent:'center',height:'6vh'}}>
        <Grid item lg={4} md={5} sm={6} xs={6}>
          <Item sx={{py:4,boxShadow:0}}>
          <Box sx={{height:'6vh',border:'2px solid #cccccc',borderRadius:1,display:'flex',alignItems:'center',pl:2}}>
              <FaSearch style={{color:'black'}}/>
              <input type="text" style={{border:'none',width:'100%',height:'100%',paddingLeft:"15px",fontSize:'18px',outline:'none',background:'transparent'}} placeholder="Search"/>
          </Box>
          </Item>
          </Grid>
          <Grid item sx={{display:'flex',justifyContent:'start'}}>
          <Item sx={{py:4,boxShadow:0}}>
          <Button className="btn" sx={{background:'#cccccc',color:'black',height:'6vh'}}>Search</Button>
          </Item>
          </Grid>
          </Grid>
          <SelfService/>
          <FAQ/>
          <RequestHelp/>
          <Footer/>
        </Box>
    )
}

export default Lading
