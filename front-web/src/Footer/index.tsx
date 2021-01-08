import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer(){
    
    return (
        <footer className="main-footer">
          App Desenvolvido pela 2ª Semana DevSuperior - DSDeliver Inc. 
          <div className="footer-icons">
            <a href="https://www.linkedin.com/school/DevSuperior" target="_new">
              <LinkedInIcon />
            </a>
            <a href="https://www.youtube.com/c/DevSuperior" target="_new">
              <YoutubeIcon />
            </a>
            <a href="https://www.instagram.com/DevSuperior.ig" target="_new">
              <InstagramIcon />
            </a>  
          </div>

        </footer>
        
    )
}

export default Footer;