import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import CircleImg from "./assets/Contact_Shape.png";
import { useEffect } from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",


        }
    }
    message = e => {

        //const username = e.target.value;
        this.setState({ message: "Thank You for your interest" })
        // this.setState({username:username})
    }
    // person = e => {
    //     const username = e.target.value;
    //     this.setState(() => ({ username }))
    // }

render() {
    return (
        <div className="wrapContact">
            <div className="contact_header"></div>

            <div className="contact">
                <Typography variant="h4" className="contact_heading">
                    CONTACT US
                </Typography>
                <div className="contact_form">
                    <FormLabel className="contact_label">
                        Name
                    </FormLabel>
                    <TextField variant="outlined" name="username" className="contact_input" required onChange={this.person} type="text" ></TextField>
                    <FormLabel className="contact_label">
                        Email
                    </FormLabel>
                    <TextField variant="outlined" type="email" className="contact_input" required ></TextField>
                    <FormLabel className="contact_label">
                        Company
                    </FormLabel>
                    <TextField variant="outlined" type="text" className="contact_input" required></TextField>
                    <FormLabel className="contact_label">
                        Message
                    </FormLabel>
                    <TextField variant="outlined" className="contact_input" multiline rowsMax="5" type="text" onBlur="this.value=''"></TextField>

                    <input type="submit" value="Send" className="contact_button" onClick={this.message} />
                    <div className="thanks">
                        {this.state.message}

                    </div>
                </div>
            </div>
            <div className="contact_circular_shape">
                {/* <img src ={CircleImg}/> */}
            </div>
        </div>

    );
}
}


export default Contact;