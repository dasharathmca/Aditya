import React, {useRef, useState} from "react";

import {Container, Typography, Button, Paper, Box, TextField, InputBase}  from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";

import emailjs from 'emailjs-com';



const Shop = () => {

   const form = useRef(null);

  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm(
        "gmail",
        "template_sp5el7q",
        e.target,
        "uayc5hsHcmu_itG0x"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }


  return (
    <div className="shop" id="contact">
      <div className="container">
        <div className="shop__text">
        <Paper component={Box} width="120%" mx="auto" p={4}>
              <Typography variant="h5"> Get In Touch</Typography>  
                <Box component="form" mt={2}>
                    <form ref={form} onSubmit={sendEmail}>
                        <TextField id="name" label="Name" name="from_name" type="text" 
                          placeholder="Enter Name" fullWidth 
                          margin="normal" variant="outlined" color="secondary"/>
                        
                        <TextField label="Email" name="email" type="email" 
                          placeholder="Enter Email Address" fullWidth 
                          margin="normal" variant="outlined" color="secondary"/>
                        

                        <TextField label="Telephone" name="contact" type="text" 
                          placeholder="Enter Mobile/Phone number" fullWidth 
                          margin="normal" variant="outlined" color="secondary"/>

                        <TextField label="Message" name="message" type="text" 
                          placeholder="Enter Message" fullWidth 
                          margin="normal" variant="outlined" color="secondary" multiline rows={4}/>


                      <div className="shop__btn">
                        <button type="submit" className="btn btn-smart">
                          Send Email
                        </button>
                      </div>
                    </form> 
                </Box>
        </Paper>          
        
        </div>
      </div>
    </div>
  );
};

export default Shop;
