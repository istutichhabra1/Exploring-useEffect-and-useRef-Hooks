import React, { useRef } from 'react';

function FocusInput() {

  const inputRef = useRef(null);

  const handleFocusClick = () => {
    
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
      />
      <button onClick={handleFocusClick}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
