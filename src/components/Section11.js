import {ReviewsCarousel} from './Basiccomponents/Carousel'
const Section11 = ()=>{

    const dummyReviews = [
        { id: 1, comment: 'Great product!', review: 'John Doe' },
        { id: 2, comment: 'Excellent service!', review: 'Jane Smith' },
        { id: 3, comment: 'Very satisfied.', review: 'Bob Johnson' },
        { id: 4, comment: 'Could be better.', review: 'Alice Brown' },
        { id: 5, comment: 'Good experience.', review: 'Charlie Wilson' },
        { id: 6, comment: 'Impressive quality.', review: 'Eva Davis' },
      ];
      


    return (
        <div className = "section11 container">
        <h1>Thank You Because We Are Nothing Without You</h1>
        <p> Don’t Rely On us…Talk To Our Existing Customers Directly For Our Feedback</p>
        <div>  <ReviewsCarousel reviews={dummyReviews} /></div>
        
        </div>
    
    )
    }
    export default Section11;