import React from "react";

const RecentTransaction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
RecentTransaction.displayName = "RecentTransaction";

const RecentTransactionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
RecentTransactionHeader.displayName = "RecentTransactionHeader";

const RecentTransactionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
RecentTransactionContent.displayName = "RecentTransactionContent";

export { RecentTransaction, RecentTransactionHeader, RecentTransactionContent };
