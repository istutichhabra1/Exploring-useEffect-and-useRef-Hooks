import React, { useRef } from "react";

function OTPInput() {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (e, index) => {
   
    if (e.target.value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
  
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {inputRefs.map((ref, index) => (
          <input
            key={index}
            ref={ref}
            type="text"
            maxLength="1"
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{ width: "40px", textAlign: "center", fontSize: "18px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default OTPInput;
