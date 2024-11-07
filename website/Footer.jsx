import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEtsy, faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div className="Icons">
           <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
           <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube}/></a>
           <a href="https://www.etsy.com"><FontAwesomeIcon icon={faEtsy}/></a>
        </div>
    );
};

export default Footer