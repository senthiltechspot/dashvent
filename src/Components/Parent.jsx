import React, { useState } from "react";

const Parent = ({
  name,
  children,
  isSuperParentHighlighted,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleMouseHover = () => {
    setIsHighlighted(true);
  };

  const handleMouseOut = () => {
    setIsHighlighted(false);
  };

  return (
    <div
      className={`parent ${
        isHighlighted || isSuperParentHighlighted ? "highlighted" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
    >
      <div>{name}</div>
      <div className="children">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            isParentHighlighted: isHighlighted || isSuperParentHighlighted,
            handleMouseEnter,
            handleMouseLeave,
          });
        })}
      </div>
    </div>
  );
};

export default Parent;
