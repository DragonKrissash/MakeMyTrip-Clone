import React from "react";
import './Footer.css';
import './Twitter.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer(){
    return <div class="footer">
        <div class="icons" style={{paddingLeft: '20px'}}>
        <TwitterIcon className="icon" fontSize="large"/>
        <FacebookIcon className="icon" fontSize="large"/>
        </div>

        <div class="text" >
            <p>© 2023 MAKEMYTRIP PVT.</p>
            <p>Country India USA UAE</p>
        </div>
    </div>
}
export default Footer;