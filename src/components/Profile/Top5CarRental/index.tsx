import React from "react";

const Top5CarRental = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
Top5CarRental.displayName = "Top5CarRental";

const Top5CarRentalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
Top5CarRentalHeader.displayName = "Top5CarRentalHeader";

const Top5CarRentalContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
Top5CarRentalContent.displayName = "Top5CarRentalContent";

export { Top5CarRental, Top5CarRentalHeader, Top5CarRentalContent };
