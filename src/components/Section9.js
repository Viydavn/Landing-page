import Button from "./Basiccomponents/Button";
import {Ontime,Freeonboard,Dedicatedmanager,Expertteam} from "./Basiccomponents/Image"

const Section9 = () => {
    return (
        <div className="section9 container">
            <h1>Let's Start Designing Your Website Today</h1>
            <div className="section9inner">
                <div >
                    <Ontime />
                    <h4>100% On Time Delivery</h4>
                    <p> All our projects are delivered on or before time, marking us as the best in industry for timely deliveries</p>
                </div>
                <div>
                 <Freeonboard/>
                    <h4>Free Onboarding Support</h4>
                    <p>Our complete team works towards providing the client with all the best support system at every phase of their project at any hour of a day.</p>
                </div>
                <div>
                <Dedicatedmanager/>
                    <h4>Dedicated Project Manager</h4>
                    <p>Our ultimate goal is to achieve the complete customer satisfaction by guiding them and taking inputs from them at every step.</p>
                </div>
                <div>
                <Expertteam/>
                    <h4>45+ Expert Team</h4>
                    <p>Team Elbroz works completely alongside the customers in order to provide them with the best possible solutions.</p>
                </div>
            </div>
            <Button name={"Get Exact Quotation"} stylee = {{bgcolor: "#AA4054", color: "white", borderr: "1px solid white", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily:`"Montserrat",Sans-serif`, borderradius:"10px",  fontsize: "18px",fontweight: "600",letterspacing: "1.2px"}}/>
        </div>

    )
}
export default Section9;