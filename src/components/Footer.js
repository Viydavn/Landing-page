import { Image } from "./Basiccomponents/Image";
import { WhatsppIcn, VisaIcn,FbIcn,YoutubeIcn,TwitterIcn,InstaIcn,LinkdinIcn} from "./Basiccomponents/icons"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerupper">
                <div className="footerupperinner">
                    <h2>logo</h2>
                    <h3>Best Website design company in Delhi</h3>
                    <div className="footer-social"><FbIcn/><InstaIcn/> <YoutubeIcn/> <LinkdinIcn/> <TwitterIcn/> </div>
                </div>
                <div className="footerupperinner hide">
                    <h1>Services</h1>
                    <a href="#">Website Designing</a>
                    <a href="#">Website Development</a>
                    <a href="#">eCommerce Development</a>
                    <a href="#">Digital Marketing</a>
                </div>
                <div className="footerupperinner ">
                    <h1>Useful Links</h1>
                    <div className="extra"><a href="#">Privacy Policy</a>
                    <a href="#">Terms and Conditions</a>
                </div>
                </div>
                <div className="footerupperinner extra">
                    <h1>Contact Us</h1>
                    <div className="extra">
                    <a href="#">India: +91 9999999999</a>
                    <a href="#">Email: sales@email.com</a>
                </div>
                </div>
            </div>
            <div className="footerlower">
                <div>               <h3>Copyright &#169; 2023 abc Private Limited</h3>
                </div>
 
                <div className="imagesection">
                    <VisaIcn/>
                    <VisaIcn/>
                    <VisaIcn/>
                    <VisaIcn/>
                    <VisaIcn/>
                    <VisaIcn/>
                    <VisaIcn/>
                </div>
            </div>
            <div className="whatsapp-button">
                <WhatsppIcn />
            </div>
        </div>


    )
}
export default Footer;


