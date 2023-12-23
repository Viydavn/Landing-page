import { Graph } from "./Basiccomponents/Image";
import Button from "./Basiccomponents/Button";
const Section3 = () => {
    return (
        <div className="section3">
            <div className="section3left">
                <h1>Are You Ready To Take Your Bussiness Online?</h1>
                <p>It’s time to establish a strong online presence that sets you apart from the competition. Contact us today to discuss your website development and design needs, and let us transform your digital dreams into reality.</p>
                <Button name={"Get A Free Consultation"} stylee={{ bgcolor: "#AA4054", color: "white", borderr: "1px solid white", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily: `"Montserrat",Sans-serif`, borderradius: "10px", fontsize: "18px", fontweight: "600", letterspacing: "1.2px" }} />
            </div>
            <div className="section3right">
                <Graph />
            </div>
        </div>
    )
}

export default Section3;