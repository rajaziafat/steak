import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@mui/material';
import {AiOutlineYoutube} from 'react-icons/ai'

function FAQ() {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return (
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'85%'}}>
            <Typography variant="h5" sx={{mt:13}}>FAQ</Typography>
            <Typography variant="p" sx={{textAlign:'center',px:2}}>Search the Frequently Asked Questions to help troubleshoot.</Typography>
            <Box sx={{mt:5,width:'100%'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{background:'#f2f2f2',py:1,px:3,border:'1px solid #e7e7e7'}}
        >
           <Typography variant="h6" sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                              Account General
                            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0,width:'100%'}}>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{background:'#f2f2f2',py:1,px:3,border:'2px solid #e7e7e7'}}
          >
             <Typography variant="h6" sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
            Account General
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{background:'#f2f2f2',py:1,px:3,border:'2px solid #e7e7e7'}}
          >
             <Typography variant="h6" sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
              Identity Verification
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          sx={{background:'#f2f2f2',py:1,px:3,border:'2px solid #e7e7e7'}}
          >
             <Typography variant="h6" sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
              Two Factor Authentication (2fA)
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          sx={{background:'#f2f2f2',py:1,px:3,border:'2px solid #e7e7e7'}}
          >
             <Typography variant="h6" sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
              Wallet
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          sx={{background:'#f2f2f2',py:1,px:3,border:'2px solid #e7e7e7'}}
          >
             <Typography variant="h6" sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
              Deposit/Withdrawal
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
          sx={{background:'#f2f2f2',py:1,px:3,border:'2px solid #e7e7e7'}}
          >
             <Typography variant="h6" sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
              API
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
        <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
          sx={{background:'#f2f2f2',py:1,px:3,border:'2px solid #e7e7e7'}}
          >
             <Typography variant="h6" sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
              Other 
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          <Typography>
            <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
                      <a href="#faq">
                          <Box sx={{display:'flex',justifyContent:'space-between',px:10,py:1,border:'1px solid #e7e7e7'}}>
                          <Typography sx={{display:"flex",alignItems:'center'}}>
                              <span>
                                  <Box sx={{width:'5px',height:'5px',borderRadius:'100%',background:'#999999',mr:1}}></Box>
                              </span>
                                How to Register an Account
                            </Typography>
                            <Box sx={{color:'#5c5eaa',display:'flex',alignItems:'center'}}>
                                <AiOutlineYoutube style={{fontSize:'24px'}}/>
                                <Typography sx={{ml:2}}>
                                Watch Tutorial
                            </Typography>
                            </Box>
                          </Box>
                      </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </Box>
    )
}

export default FAQ
