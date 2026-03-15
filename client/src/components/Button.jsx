import React from "react";

function Button({ title, onClick, size = "medium", variant = "primary" }) {

  const SIZE_CLASSES = {
    small: "px-2 py-1 text-xs mx-3",
    medium: "px-4 py-2 text-sm mx-4",
    large: "px-6 py-2 text-lg mx-4",
  };

  const VARIANT_CLASSES = {
    primary: "bg-[#48A6A7] text-white hover:bg-[#006A71]",
    secondary: "bg-[#9ACBD0] text-black hover:bg-[#48A6A7]",
    tertiary: "bg-[#F2EFE7] text-[#006A71] border border-[#006A71] hover:bg-[#9ACBD0]",
  };

  return (
    <button
      onClick={onClick}
      className={`${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} playpen-sans rounded-lg transition duration-200`}
    >
      {title}
    </button>
  );
}

export default Button;