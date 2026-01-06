"use client";

import React from "react";
import clsx from "clsx";
import Typography from "../typography";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: "text" | "email" | "textarea";
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  isRequired = false,
  className,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      {label && (
        <Typography size={16} weight={600} lineHeight={24}>
          {label}
          {isRequired && <span className="text-red-500"> *</span>}
        </Typography>
      )}

      {type === "textarea" ? (
        <textarea
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          suppressHydrationWarning
          rows={4}
          required={isRequired}
          placeholder={placeholder}
          className={clsx(
            "w-full bg-[#EEE] dark:bg-[#1D1D1D] rounded-[8px] px-[24px] py-[16px] text-[#070707] dark:text-white placeholder:text-[#8D8D8D] dark:placeholder:text-[#B2B2B2]",
            className
          )}
        />
      ) : (
        <input
          {...props}
          suppressHydrationWarning
          type={type}
          required={isRequired}
          placeholder={placeholder}
          className={clsx(
            "w-full bg-[#EEE] dark:bg-[#1D1D1D] rounded-[8px] px-[24px] py-[16px] text-[#070707] dark:text-white placeholder:text-[#8D8D8D] dark:placeholder:text-[#B2B2B2]",
            className
          )}
        />
      )}
    </div>
  );
};

export default Input;
