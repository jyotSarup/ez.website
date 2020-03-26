import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import CircleImg from "./assets/Contact_Shape.png";


function Contact() {
    return (
        
        <div className="wrapContact">
            <div className="contact_header"> 
           
           </div>
            
            <div className="contact">
                <Typography variant="h4" className="contact_heading">
                    CONTACT US
                </Typography>
                <div className="contact_form">
                    <FormLabel className="contact_label">
                        Name
                    </FormLabel>
                    <TextField variant="outlined" className="contact_input"></TextField>
                    <FormLabel className="contact_label">
                        Email
                    </FormLabel>
                    <TextField variant="outlined" className="contact_input"></TextField>
                    <FormLabel className="contact_label">
                        Company
                    </FormLabel>
                    <TextField variant="outlined" className="contact_input"></TextField>
                    <FormLabel className="contact_label">
                        Message
                    </FormLabel>
                    <TextField variant="outlined" className="contact_input" multiline rowsMax="5"></TextField>

                    <Button variant="contained" className="contact_button">Send</Button>
                </div>
            </div>
            <div className="contact_circular_shape">
                {/* <img src ={CircleImg}/> */}
            </div>
        </div>
    
    );
}

export default Contact;