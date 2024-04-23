import React, { useState } from "react";

const Child = ({
  name,
  isParentHighlighted,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleMouseHover = (event) => {
    setIsHighlighted(true);
    // Stop event propagation to prevent parent from being highlighted
    event.stopPropagation();
  };

  const handleMouseOut = () => {
    setIsHighlighted(false);
  };

  return (
    <div
      className={`child ${
        isHighlighted || isParentHighlighted ? "highlighted" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
    >
      {name}
    </div>
  );
};

export default Child;
