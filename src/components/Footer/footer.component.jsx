import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import { Tooltip } from 'antd';

import { useNavigate } from "react-router-dom";

import './footer.styles.css'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="socialMedia">
                <Tooltip title="Github Page">
                    <GitHubIcon onClick={() => window.open("https://github.com/StephCLL/playground")}/>
                </Tooltip>
                <Tooltip title="LinkedIn Profile">
                    <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/stephc13/")}/>
                </Tooltip>
                <Tooltip title="Contact Page">
                    <ContactPageIcon onClick={() => {navigate("/contact")}}/>
                </Tooltip>
            </div>
            <p> &copy; 2023 Stephen Chen</p>
        </div>
    )
}

export default Footer;