import Button from "./Basiccomponents/Button";
import Form from "./Basiccomponents/Form";
import { Sofalaptop } from "./Basiccomponents/Image"
const Section6 = () => {
    return (
        <div className="section6 container">
            <div className ="container6">
            <div className="section6left" >
                <h1>Get Started With A Simple Discussion With An Expert</h1>
                <Sofalaptop />
            </div>
            <div className="section6right">
                <div className="form-container-outer2">
                    <h1>Let's discuss Your project</h1>
                    <p>Accelerating revenues for more than 2500+ companies </p>
                    <Form />
                </div>
                <h3>~ Connnect Instantly ~</h3>
                <Button name={"+91-9667899224"} stylee={{ bgcolor: "#AA4054", color: "white", borderr: "1px solid white", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily: `"Montserrat",Sans-serif`, borderradius: "10px", fontsize: "18px", fontweight: "600", letterspacing: "1.2px" }} />
                <Button name={"WhatsApp Now"} stylee={{ bgcolor: "#46C256", color: "white", borderr: "1px solid #46C256", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily: `"Montserrat",Sans-serif`, borderradius: "10px", fontsize: "18px", fontweight: "600", letterspacing: "1.2px" }}></Button>
            </div>
            </div>
        </div>

    )
}
export default Section6;