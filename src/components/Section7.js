import { Research,Planning,Designing,Development,Testing } from "./Basiccomponents/Image";
const Section7 = () => {
    return (
        <div className="section7 container">
            <h1>Process We Follow To Deliver Your Website</h1>
            <p>We design Website To Increase Your Revenue….Not For Fun</p>
            <div className="section7inner">
                <div className="test">
                    <Research/>
                    <h4>Research</h4>
                </div>
                <div>
                    <Planning/>
                    <h4>Planning</h4>
                </div>
                <div>
                    <Designing/>
                    <h4>Designing</h4>
                </div>
                <div><Development/>
                    <h4>Development</h4>
                </div>
                <div><Testing/>
                    <h4>Testing</h4>
                </div>
            </div>
        </div>

    )
}
export default Section7;