import Button from "./Button";
const Card = ({heading,describe}) =>{
    return(
        <div className = "card">
            <h1>{heading}</h1>
            <p>{describe}</p>
        </div>
    )
}

export const Card1 = ({details}) =>{
    return(
        <div className = "card1">       
         <details.url/>
        <h3>{details.heading}</h3>
        <p>{details.para}</p>
        <Button name={details.name} stylee = {{bgcolor: "#AA4054", color: "white", borderr: "1px solid white", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily:`"Montserrat",Sans-serif`, borderradius:"10px",  fontsize: "18px",fontweight: "600",letterspacing: "1.2px"}}/>
        </div>

    )
}


export default Card;