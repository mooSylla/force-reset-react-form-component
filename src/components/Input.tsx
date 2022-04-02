import React from "react";

const Input = ({ type }: { type: React.HTMLInputTypeAttribute }) => (
  <input type={type} className="bg-gray-200 rounded-md p-2" />
);

export default Input;
