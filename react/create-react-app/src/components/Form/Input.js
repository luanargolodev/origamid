import React from "react";

const Input = ({ label, id, ...props }) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export default Input;
