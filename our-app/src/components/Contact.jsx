import React from "react";
// import App from "../App.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import PinterestIcon from '@mui/icons-material/Pinterest';

function Contact(){
    return(
            <div className="center">
                <h6 >Follow us on</h6>
                <div className="icon"><FacebookIcon /></div>
                <div className="icon"><InstagramIcon /></div>
                <div className="icon"><TwitterIcon /></div>
            </div>
    )
}

export default Contact;