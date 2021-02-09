import React from "react"
import { useToggleState } from "@react-stately/toggle"
import { useCheckbox } from "@react-aria/checkbox"

export const Checkbox = (props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: { [x: string]: any }
}): JSX.Element => {
    const state = useToggleState(props)
    const ref = React.useRef()
    const { inputProps } = useCheckbox(props, state, ref)

    return (
        <label className="block">
            <input {...inputProps} ref={ref} />
            {props.children}
        </label>
    )
}
