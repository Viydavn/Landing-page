import Button from "./Basiccomponents/Button";
import Card from "./Basiccomponents/Card";
import DialerButton from "./Basiccomponents/Diallerbutton"
const Topleftpanel = ()=>{
    return(
        <>
        <h1> Top Website Designing Company in Delhi</h1>
        <p>Accelerating revenues for more than 2500+ companies for 12+ years, Whatever Your Business Needs to Achieve it’s Goals, We Will Make it Happen!</p>
        <Button name={"Request A Proposal"} stylee = {{bgcolor: "#AA4054", color: "white", borderr: "1px solid white", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily:`"Montserrat",Sans-serif`, borderradius:"10px",  fontsize: "18px",fontweight: "600",letterspacing: "1.2px"}}/>
        <DialerButton/>
       <div className = "card-panel">
       <Card heading={"12+"} describe={"Years of Experience"}/>
       <Card heading={"4.2K+"} describe={"Website Delivered"}/>
       <Card heading={"2.5M+"} describe={"Leads Generated"}/>
       <Card heading={"16+"} describe={"Countries Served"}/>
       </div>
       
        </>
        )
}

export default Topleftpanel;
