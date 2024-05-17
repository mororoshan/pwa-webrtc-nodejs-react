import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", inputClassName = "", disabled, ...rest }, ref) => {

        return (
            <input
                {...rest}
                type="text"
                className={`border-black px-2 py-1 rounded bg-gray-500 w-full ${inputClassName}`}
                ref={ref}
            />
        );
    }
);

export default Input;
