import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[22px]" };
const variants = {
  outline: { blue_A700: "border border-blue-A700 border-solid text-blue-A700" },
  fill: {
    blue_700: "bg-blue-700 text-white-A700",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
};
const sizes = { xs: "p-3", sm: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["blue_A700", "blue_700"]),
};

export { Button };
