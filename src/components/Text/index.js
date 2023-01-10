import React from "react";
const variantClasses = {
  h1: "font-semibold sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "sm:text-[32px] md:text-[34px] text-[36px]",
  h3: "font-normal sm:text-[24px] md:text-[26px] text-[28px]",
  h4: "font-semibold sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "font-semibold text-[20px]",
  h6: "text-[18px]",
  body1: "font-normal text-[17px]",
  body2: "text-[16px]",
  body3: "font-normal text-[15px]",
  body4: "text-[14px]",
  body5: "text-[12px]",
  body6: "text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
