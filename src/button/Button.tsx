import React, { MouseEvent } from "react"

export interface ButtonInterface {
    primary?: boolean
    backgroundColor?: string
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    label: string
    props: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [x: string]: any
    }
}

export const Button = ({
    primary,
    backgroundColor,
    label,
    ...props
}: ButtonInterface): JSX.Element => {
    const mode = primary ? "bg-blue-500" : "bg-red-500"
    return (
        <button
            type="button"
            className={`${mode} text-white px-4 py-2 rounded-md shadow-sm`}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}
        </button>
    )
}

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    onClick: undefined
}
