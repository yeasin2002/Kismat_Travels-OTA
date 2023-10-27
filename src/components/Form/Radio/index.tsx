"use client";

import { DetailedHTMLProps, InputHTMLAttributes, useId } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import style from "./style.module.css";

interface RadioProps
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "checked"> {
  register: UseFormRegisterReturn;
  options: string[];
  checkedIndex?: number;
  classNameLabel?: string;
  error?: FieldError;
  label?: string;
}

export function Radio({
  label = "",
  title = label.replace(/ \*$/, ""),
  options,
  error,
  classNameLabel,
  register,
  checkedIndex,
  ...rest
}: RadioProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1 ">
      <label
        title={title}
        htmlFor={id}
        className={twMerge("text-base font-medium text-gray-800 sm:line-clamp-1", classNameLabel)}
      >
        {label}
      </label>

      <div
        className={twMerge(
          "ring-brand-100 flex gap-4 rounded border-none bg-gray-50 p-2 text-gray-800 ring-1 [--gray-900:rgb(27_37_89)]",
          error && "ring-red-500/50 focus:ring-red-500/50"
        )}
      >
        <RadioCore options={options} checkedIndex={checkedIndex} register={register} {...rest} />
      </div>
      {error && <p className="line-clamp-1 text-sm text-red-500/90">{error.message}</p>}
    </div>
  );
}

interface RadioCoreProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  register: UseFormRegisterReturn;
  options: string[];
  checkedIndex?: number;
}

export function RadioCore({ options, register, checkedIndex = 0, disabled, ...rest }: RadioCoreProps) {
  const id = useId();

  return options.map((v) => (
    <div key={v} className={twMerge(style.container, " [--dark:rgb(59,130,246)]", disabled && "opacity-50")}>
      <input
        value={v}
        type="radio"
        id={id + v.replace(/\s+/g, "")}
        className={twMerge(style.radio, "sr-only")}
        defaultChecked={v === options[checkedIndex - 1]}
        {...register}
        {...rest}
      />

      <label htmlFor={id + v.replace(/\s+/g, "")} className={twMerge(style.label, "sm-max:leading-tight")}>
        <div className={style["check-box"]}>
          <div className={style["box"]} />
        </div>
        {v}
      </label>
    </div>
  ));
}
