// Accordion.js
import React, { useState } from 'react';

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSectionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index} className="accordion-section">
          <div
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleSectionClick(index)}
          >
            {section.header}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
