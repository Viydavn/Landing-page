import { useState, useEffect } from "react";
import Carousel from "./Basiccomponents/Carousel";
import { CC1, CC2, CC3, CC4, CC5, CC6 } from "./Basiccomponents/Image";
const Section8 = () => {
    const phrases = ['sell', 'speak', 'scale'];
    const color = '#AA4054';
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run the 

    const carouselSlides = [
        {
            key: '1',
            image: <CC1 />,
            caption: 'Caption 1',
        },
        {
            key: '2',
            image: <CC2 />,
            caption: 'Caption 2',
        },

        {
            key: '3',
            image: <CC3 />,
            caption: 'Caption 3',
        },
        {
            key: '4',
            image: <CC4 />,
            caption: 'Caption 4',
        },
        {
            key: '5',
            image: <CC5 />,
            caption: 'Caption 5',
        },
        {
            key: '6',
            image: <CC6 />,
            caption: 'Caption 6',
        }
    ];

    return (
        <div className="section8 container">
            <h3>We build websites that <span style={{ color }}>{phrases[currentPhraseIndex]}</span></h3>
            <h1>Our Portfolio</h1>
            <p>Pay Only If You Are Satisfied with Our Work... No Question Asked Money back Policy</p>
            <div className="carousal">
                <Carousel slides={carouselSlides} />
            </div>
        </div>

    )
}
export default Section8;