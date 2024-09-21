import React from "react";

const DetailRental = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
DetailRental.displayName = "DetailRental";

const DetailRentalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
DetailRentalHeader.displayName = "DetailRentalHeader";

const DetailRentalContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
DetailRentalContent.displayName = "DetailRentalContent";

export { DetailRental, DetailRentalHeader, DetailRentalContent };
