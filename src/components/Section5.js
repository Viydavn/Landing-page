import Button from "./Basiccomponents/Button";
import {Selectservice,Startproject,Talkstrategist} from "./Basiccomponents/Image"

const Section5 = () => {
    return (
        <div className="section5 container">
            <h1> Book A Free 30 Mins. Expert Consultation Now!</h1>
           <div className="section5inner">
            <div>
                    <Selectservice/>
                <h3>Select A Service</h3>
                <p>Let's Get Started By Choosing Right Service For Your Business Like Website Designing, Website Development, eCommerce website designing etc.</p>
            </div>
            <div>
                
                    <Talkstrategist/>
               
                <h3>Talk to Our Strategist</h3>
                <p>One Of Our Digital Expert Will Get In Touch With You To Understand Your Requirement And Will Share The Proposal With Best Prices.</p>
            </div>
            <div>
                <div>
                    <Startproject/>
                </div>
                <h3>Let's Start the Project</h3>
                <p>Once You Choose Us For Your Valuable Project, We Will Get Started With The Project And A Dedicated Project Manager With The Expert Team Will Be Assigned To You.</p>
            </div>
            </div>
            <Button name={"+91-9667899224"} stylee = {{bgcolor: "#AA4054", color: "white", borderr: "1px solid white", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily:`"Montserrat",Sans-serif`, borderradius:"10px",  fontsize: "18px",fontweight: "600",letterspacing: "1.2px"}}/>
            <Button name={"Get A Free Consultation"} stylee = {{bgcolor: "white", color: "#AA4054", borderr: "1px solid #AA4054", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily:`"Montserrat",Sans-serif`, borderradius:"10px",  fontsize: "18px",fontweight: "600",letterspacing: "1.2px"}}></Button>
    </div>

)
}
export default Section5;