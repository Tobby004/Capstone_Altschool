import React from "react";

const sizeClasses = {
  txtGilroyBold16: "font-gilroybold font-normal",
  txtGilroyMedium20WhiteA700: "font-gilroymedium font-normal",
  txtGilroySemiBold32: "font-gilroysemibold font-normal",
  txtGilroyBold24: "font-gilroybold font-normal",
  txtGilroyMedium20: "font-gilroymedium font-normal",
  txtGilroyMedium14: "font-gilroymedium font-normal",
  txtGilroyMedium18BlueA700: "font-gilroymedium font-normal",
  txtGilroyBold40WhiteA700: "font-gilroybold font-normal",
  txtGilroyMedium14Gray90001: "font-gilroymedium font-normal",
  txtGilroyMedium24: "font-gilroymedium font-normal",
  txtGilroyMedium18: "font-gilroymedium font-normal",
  txtGilroySemiBold16: "font-gilroysemibold font-normal",
  txtGilroyMedium16: "font-gilroymedium font-normal",
  txtGilroyBold40: "font-gilroybold font-normal",
  txtKanitSemiBold48: "font-kanit font-semibold",
  txtGilroyMedium24WhiteA700: "font-gilroymedium font-normal",
  txtGilroyMedium16Gray90001: "font-gilroymedium font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
