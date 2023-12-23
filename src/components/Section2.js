import { Card1 } from "./Basiccomponents/Card";
import {WebsiteBussiness,WebsiteCorp,WebsiteEcom} from "./Basiccomponents/Image";
const Section2 = ()=>{
    return (
        <div className="section2">
        <h1>Award-Winning Wesite Designing Agency in Delhi</h1>
        <p>We Design & Manage India's Leading Corporate, Bussiness & eCommerce Websites.</p>
        <div className = "card-panel2">
        <Card1 details = {{url:WebsiteBussiness, heading: "Website For Bussinesses", para:"Unleash your business's full potential with our tailor-made website designs. From bold startups to seasoned enterprises, our team crafts engaging online solutions that captivate audiences and drive success across all industries.", name:"Get Exact Quotation", }}/>
        <Card1 details = {{ url:WebsiteCorp,heading: "Website For Corporates", para:"Elevate your corporate brand with our website designs. From Fortune 500 giants to innovative startups, our team creates sleek and impactful platforms that showcase your professionalism and drive business growth.", name:"Get Exact Quotation", }}/>
        <Card1 details = {{url:WebsiteEcom, heading: "eCommerce Website", para:"Step into the world of seamless online shopping with our stunning eCommerce website designs. From user-friendly interfaces to secure payment gateways, we create captivating online stores that turn browsers into loyal customers.", name:"Get Exact Quotation", }}/> 
        </div>
        </div>

    )
}
export default Section2;