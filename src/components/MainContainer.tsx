import React from "react";

const MainContainer: any = ({ children }: any) => {
  return (
    <div className="w-full flex justify-center mobile:px-6 tablet:px-8 laptop:px-12 desktop:px-16">
      {children}
    </div>
  );
};

export default MainContainer;
