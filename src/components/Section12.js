import Button from "./Basiccomponents/Button";
import {Google,Facebook,Trustpilot} from "./Basiccomponents/Image"
const Section12 = ()=>{
    return (
        <div className="section12 container">
            <h1>Outstanding Reviews</h1>
            <div className = "review-img">
                <Google/>
                <Facebook/>
                <Trustpilot/>
            </div>
            <h3>  Join 4000+ Happy customers from India. </h3>
            <h4>Accelerating revenues for more than 2500+ companies for 12+years</h4>
            <Button name={"Request A Proposal"} stylee = {{bgcolor: "#AA4054", color: "white", borderr: "1px solid white", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily:`"Montserrat",Sans-serif`, borderradius:"10px",  fontsize: "18px",fontweight: "600",letterspacing: "1.2px"}}/>
            <Button name={"+91-9999999999"} stylee = {{bgcolor: "white", color: "#AA4054", borderr: "1px solid #AA4054", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily:`"Montserrat",Sans-serif`, borderradius:"10px",  fontsize: "18px",fontweight: "600",letterspacing: "1.2px"}}></Button>
        </div>

    
    )
    }
    export default Section12;