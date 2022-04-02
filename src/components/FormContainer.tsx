import React from "react";

const FormContainer = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) => (
  <div className="bg-white  w-4/5 shadow-lg shadow-green-700 rounded-md p-3">
    {children}
  </div>
);

export default FormContainer;
