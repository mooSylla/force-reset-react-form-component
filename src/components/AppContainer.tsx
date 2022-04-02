import React from "react";

const AppContainer = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) => (
  <div className="bg-green-500 min-h-screen flex justify-center items-center">
    {children}
  </div>
);

export default AppContainer;
