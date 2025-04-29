import React, { useState, useEffect } from 'react';

function ToggleComponent() {
  useEffect(() => {
    console.log("Component Mounted");

   
    return () => {
      console.log("Component Unmounted");
    };
  }, []); 

  return <div>Component is Visible</div>;
}

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Component Visibility
      </button>
      {isVisible && <ToggleComponent />}
    </div>
  );
}

export default App;
