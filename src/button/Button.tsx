import React from "react"
import { useButton } from "@react-aria/button"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button = (props: {
    children: { [x: string]: any }
}): JSX.Element => {
    const ref = React.useRef()
    const { buttonProps } = useButton(props, ref)
    let mode = "bg-blue-500"
    switch (buttonProps.type) {
        case "primary": {
            mode = "bg-blue-500"
            break
        }
        case "secondary": {
            mode = "bg-green-500"
            break
        }
        case "warning": {
            mode = "bg-red-500"
            break
        }
        default: {
            mode = "bg-blue-500"
            break
        }
    }

    return (
        <button
            {...buttonProps}
            ref={ref}
            className={`${mode} text-white px-4 py-2 rounded-md shadow-sm`}
        >
            {props.children}
        </button>
    )
}
