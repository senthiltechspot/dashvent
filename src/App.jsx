import React, { useState } from 'react';
import './App.css';
import Parent from './Components/Parent';
import Child from './Components/Child';


// App component
const App = () => {
  const data = {
    name: 'Super Parent',
    children: [
      { name: 'Parent 1', children: [{ name: 'Child 1.1' }, { name: 'Child 1.2' }] },
      { name: 'Parent 2', children: [{ name: 'Child 2.1' }, { name: 'Child 2.2' }] },
      { name: 'Parent 3', children: [{ name: 'Child 3.1' }, { name: 'Child 3.2' }] },
    ]
  };

  const [isSuperParentHighlighted, setIsSuperParentHighlighted] = useState(false);

  const handleMouseEnter = () => {
    setIsSuperParentHighlighted(true);
  };

  const handleMouseLeave = () => {
    setIsSuperParentHighlighted(false);
  };

  return (
    <div className="app">
      <Parent
        name={data.name}
        isSuperParentHighlighted={isSuperParentHighlighted}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      >
        {data.children.map((child, index) => (
          <Parent key={index} name={child.name}>
            {child.children.map((grandChild, index) => (
              <Child key={index} name={grandChild.name} />
            ))}
          </Parent>
        ))}
      </Parent>
    </div>
  );
};

export default App;
