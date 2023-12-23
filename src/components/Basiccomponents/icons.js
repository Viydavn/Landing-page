import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faCcVisa,faFacebook,faTwitter,faLinkedin,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
export const WhatsppIcn = () => {
    return (
        <div className="whatsapp-button">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: "#48f995" }} />
            </a>
        </div>
    );
};


export const VisaIcn = () => {
    return (
        <div className="visa-button">
            <a href="" target="_blank" rel="">
                <FontAwesomeIcon icon={faCcVisa}  size="2xl" style={{color: "#f7f9fc",}}/>
            </a>
        </div>
    );
};

export const FbIcn = () => {
    return (
        <div className="fb-button">
            <a href="" target="_blank" rel="">
                <FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#f7f9fc",}} />
            </a>
        </div>
    );
};
export const InstaIcn = () => {
    return (
        <div className="Insta-button">
            <a href="" target="_blank" rel="">
                <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#f7f9fc",}} />
            </a>
        </div>
    );
};

export const TwitterIcn = () => {
    return (
        <div className="Tweet-button">
            <a href="" target="_blank" rel="">
                <FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#f7f9fc",}} />
            </a>
        </div>
    );
};

export const YoutubeIcn = () => {
    return (
        <div className="youtube-button">
            <a href="" target="_blank" rel="">
                <FontAwesomeIcon icon={faYoutube} size="xl" style={{color: "#f7f9fc",}} />
            </a>
        </div>
    );
};


export const LinkdinIcn = () => {
    return (
        <div className="Linkedin-button">
            <a href="" target="_blank" rel="">
                <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#f7f9fc",}} />
            </a>
        </div>
    );
};
export const LeftArrowIcn = () => {
    return (
        <div className="arrow left">
                <FontAwesomeIcon icon={faCircleArrowLeft} size="xl" style={{color: "#AA4054",}} />
        </div>
    );
};

export const RightArrowIcn = () => {
    return (
        <div className="arrow right">
                <FontAwesomeIcon icon={faCircleArrowRight} size="xl" style={{color: "#AA4054",}} />
        </div>
    );
};