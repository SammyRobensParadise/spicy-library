import React from "react"

import { Button } from "./Button"

export default {
    title: "Becos/Button",
    component: Button
}

const Template = (args) => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
Primary.args = {
    type: "primary",
    onClick: () => {
        alert("Primary")
    }
}

export const Secondary = Template.bind({})
Secondary.args = {
    type: "secondary",
    onClick: () => {
        alert("Secondary")
    }
}
export const Warning = Template.bind({})
Warning.args = {
    type: "warning",
    onClick: () => {
        alert("Warning")
    }
}
