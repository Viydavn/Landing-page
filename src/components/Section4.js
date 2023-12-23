import {NDTV,Indiatoday,Thehindu,Timesofindia,Yourstory,Indianexpress,Bussinessline,Bussinessstandard} from "./Basiccomponents/Image"
const Section4 = ()=>{
    return(
        <div className="section4 container">
        <h1>How We're Hitting Headlines</h1>
        <div className ="imagesection">
            <NDTV/>
            <Thehindu/>
            <Indiatoday/>
            <Timesofindia/>
            <Yourstory/>
            <Bussinessline/>
        <Indianexpress/>
        <Bussinessstandard/>
      
        </div>
        </div>
    )
}
export default Section4;