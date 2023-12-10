import React from "react";

const Circle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={`circle flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
};

export default Circle;
