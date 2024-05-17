import React, {
    InputHTMLAttributes,
    ReactNode,
    forwardRef,
} from "react";

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref): JSX.Element => {
        const {
            children,
            onClick,
            className,
            type = "button",
            ...rest
        } = props;

        return (
            <button
                ref={ref}
                type={type}
                className={`border border-1 px-2 py-1 rounded bg-gray-800 text-white hover:bg-gray-100 hover:text-black className ${
                    className ? className : ""
                }`}
                onClick={onClick}
                {...rest}
            >
                {children}
            </button>
        );
    }
);

export default Button;
