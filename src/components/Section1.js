import Topleftpanel from "./Topleftpanel.js";
import Toprightpanel from "./Toprightpanel.js";
import { Fortis, Citykart, Crystline, Dollzdinoz, Gautam, Iit, Laraqjewels, Nanosafe, Perfectio, Rara, Lawnexus, Makerman, Murli } from "./Basiccomponents/Image.js"
const Section1 = () => {
    return (
        <div className="section1">
            <div className="toppanel-upper">
                <div className="topleftupperpanel">
                    <Topleftpanel />
                </div>
                <div className="toprightupperpanel">
                    <Toprightpanel />
                </div>

            </div>

            <div className="toppanel-lower">
                    <p>Trusted By 4000+ Brands & Businesses</p>
                <div className="imagesection">
                    <Fortis />
                    <Citykart />
                    <Makerman />
                    <Nanosafe />
                    <Lawnexus />
                    <Dollzdinoz />
                    <Murli />
                    <Rara />
                    <Iit />
                    <Crystline />
                    <Perfectio />
                    <Gautam />
                    <Laraqjewels />
                </div>
            </div>
        </div>
    );
}

export default Section1;