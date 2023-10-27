"use client";

import { DetailedHTMLProps, InputHTMLAttributes, useId } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  register: UseFormRegisterReturn;
  error?: FieldError;
  classNameLabel?: string;
  label?: string;
}

export function Input({
  register,
  error,
  label = "",
  placeholder = label.replace(/ \*$/, ""),
  className,
  classNameLabel,
  type = "text",
  ...rest
}: InputProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      <label
        title={label.replace(/ \*$/, "")}
        htmlFor={id}
        className={twMerge("line-clamp-1 text-base font-medium text-gray-800", classNameLabel)}
      >
        {label}
      </label>
      <input
        {...register}
        id={id}
        className={twMerge(
          "ring-brand-100 disabled:ring-brand-50 block h-10 w-full rounded border-none bg-gray-50 p-2.5 text-sm text-gray-900 outline-none  ring-1 focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50",
          error && "ring-red-500/50 focus:ring-red-500/50",
          className
        )}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
      {error && <p className="line-clamp-1 text-sm text-red-500/90">{error.message}</p>}
    </div>
  );
}
