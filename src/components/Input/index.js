import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillDeeppurpleA700: "bg-deep_purple_A700",
  FillGray50: "bg-gray_50",
  OutlineBlack900: "border border-black_900 border-solid",
};
const shapes = { RoundedBorder10: "rounded-radius10" };
const sizes = {
  sm: "sm:p-[2px] md:p-[3px] p-[5px]",
  md: "sm:p-[4px] md:p-[5px] p-[8px]",
  lg: "sm:pb-[10px] md:pb-[13px] pb-[19px] pt-[13px] sm:pt-[6px] md:pt-[8px] px-[13px] sm:px-[6px] md:px-[8px]",
  xl: "md:pb-[12px] pb-[18px] sm:pb-[9px] sm:pt-[12px] md:pt-[15px] pt-[23px] md:px-[12px] sm:px-[15px] px-[18px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "FillDeeppurpleA700",
    "FillGray50",
    "OutlineBlack900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "FillDeeppurpleA700",
  size: "sm",
};

export { Input };
