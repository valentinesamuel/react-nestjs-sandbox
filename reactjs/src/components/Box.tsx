import React from "react";

function Box({
  children,
  className,
  animation,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
}) {
  return (
    <div
      className={`box flex items-center justify-center ${className}`}
      data-animate={animation}
    >
      {children}
    </div>
  );
}

export default Box;
