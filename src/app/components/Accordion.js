import React, { useState } from "react";

const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => handleToggle(index),
        })
      )}
    </div>
  );
};

export default Accordion;
