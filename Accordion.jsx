import React, { useState } from "react";

const Accordion = ({ items }) => {

const [openAccrodion, setOpenAccordion] = useState(null);

  const handleAccordion = (index) => {
    setOpenAccordion(openAccrodion == index ? null : index);
  };

  return (
    <div>
      <h1>Accordion</h1>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <button onClick={() => handleAccordion(index)}>{item.title}</button>
            {openAccrodion === index && <div>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
