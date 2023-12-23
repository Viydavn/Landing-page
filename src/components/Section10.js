import Accordion from "./Basiccomponents/Accordion";
const Section10 = ()=>{

    const accordionSections1 = [
        {
          header: 'Why is having a website important for my business?',
          content: 'Having a website is crucial for businesses in the digital age. It allows you to establish an online presence, reach a wider audience, and showcase your products or services 24/7.',
        },
        {
          header: 'What are the benefits of having a website for small businesses?',
          content: 'A website helps small businesses compete with larger ones by leveling the playing field. It enables them to reach a global audience, build brand credibility, and provide convenient information to potential customers.',
        },
        {
            header: 'How does a website help in building credibility and trust?',
            content: 'A professionally designed website with relevant content, testimonials, and contact information instills confidence in visitors. It shows that you are a legitimate business and helps establish trust with potential customers.',
          },
          {
            header: 'Can a website help increase my brand visibility and recognition?',
            content: 'Absolutely! With effective SEO strategies and online marketing, your website can rank higher in search engine results, making it easier for people to discover your brand and increase your online visibility.',
          },
          {
            header: 'What role does a website play in generating leads and conversions?',
            content: 'Your website acts as a powerful lead generation tool. By incorporating lead capture forms, compelling calls-to-action, and informative content, you can convert visitors into qualified leads and ultimately into paying customers.',
          },
      ];

      const accordionSections2 = [
        {
          header: 'Is it necessary to have a mobile-responsive website?',
          content: 'Yes, it’s essential! With the majority of internet users accessing websites through mobile devices, having a mobile-responsive website ensures a seamless user experience, boosts engagement, and improves search engine rankings.',
        },
        {
          header: 'How can a website help me stay ahead of my competition?',
          content: 'A well-designed website with compelling content and user-friendly features can differentiate you from your competitors. It helps you showcase your unique selling points, effectively communicate your value proposition, and stand out in the crowded online marketplace.',
        },
        {
            header: 'Does having a website benefit service-based businesses as well?',
            content: 'Yes, definitely! A website allows service-based businesses to showcase their offerings, provide detailed descriptions of services, display client testimonials, and make it easy for potential clients to reach out and inquire about services.',
          },
          {
            header: 'Can a website help me track and analyze user behavior?',
            content: 'Yes, through web analytics tools, you can gain valuable insights into user behavior, such as website traffic, page views, click-through rates, and conversion rates. This data helps you make data-driven decisions to optimize your website and marketing strategies.',
          },
          {
            header: 'How does a website contribute to long-term business growth?',
            content: 'A website acts as a long-term asset for your business. As you consistently optimize it, create valuable content, and drive traffic, it becomes a powerful lead generation and customer acquisition tool,',
          },
      ];
    
    return (
        <div className="section10 container">
        <h1>Frequently Asked Questions</h1>
        <p>We build & manage world’s leading corporate websites.</p>
        <div className="section10-accordion-container">
            <div>
            <Accordion sections={accordionSections1} />
            </div>
            <div> <Accordion sections={accordionSections2} />
            </div>
        </div>
        </div>
    
    )
    }
    export default Section10;