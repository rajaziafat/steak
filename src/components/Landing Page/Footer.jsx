import React from 'react'
import { Box } from '@mui/material';
import {AiOutlineTwitter} from 'react-icons/ai';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <Box sx={{width:'100%',background:'#f2f2f2',display:'flex',flexDirection:'column',alignItems:'center',py:4}}>
            <Box sx={{display:'flex',justifyContent:'center',height:'35px'}}>
                <a href="#insta"><AiOutlineTwitter style={{borderRadius:'100%',background:"black",color:'white',padding:'6px',fontSize:'32px'}}/></a>
                <a href="#insta"><AiOutlineTwitter style={{borderRadius:'100%',background:"black",color:'white',padding:'6px',fontSize:'32px',marginLeft:'15px'}}/></a>
                <a href="#insta"><AiOutlineTwitter style={{borderRadius:'100%',background:"black",color:'white',padding:'6px',fontSize:'32px',marginLeft:'15px'}}/></a>
                <a href="#insta"><AiOutlineTwitter style={{borderRadius:'100%',background:"black",color:'white',padding:'6px',fontSize:'32px',marginLeft:'15px'}}/></a>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:3}}>
                <a href="#legal" style={{paddingRight:'10px',paddingLeft:'10px',borderRight:'2px solid #797979',height:'15px',display:'flex',alignItems:'center',justifyContent:'center'}}>Legal</a>
                <a href="#disclaimer" style={{paddingRight:'10px',paddingLeft:'10px',borderRight:'2px solid #797979',height:'15px',display:'flex',alignItems:'center',justifyContent:'center'}}>Disclaimer</a>
                <a href="#Terms" style={{paddingRight:'10px',paddingLeft:'10px',height:'15px',display:'flex',alignItems:'center',justifyContent:'center'}}>Terms {"&"} Conditions</a>
            </Box>
            <Typography variant="p" sx={{mt:3,textAlign:'center',px:2}}>
                    © Copyright Steak Cube LLC 2018-2021. All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default Footer
