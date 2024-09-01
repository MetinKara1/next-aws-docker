import React from "react";

const ReviewCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
ReviewCard.displayName = "ReviewCard";

const ReviewTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
ReviewTitle.displayName = "ReviewTitle";

const ReviewHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
ReviewHeader.displayName = "ReviewHeader";

const ReviewContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
ReviewContent.displayName = "ReviewContent";
export { ReviewCard, ReviewTitle, ReviewHeader, ReviewContent };
