import React from "react"

import { Checkbox } from "./Checkbox"

export default {
    title: "Becos/Checkbox",
    component: Checkbox
}

const Template = (args) => <Checkbox {...args}>Engage?</Checkbox>

export const Default = Template.bind({})
Default.args = {}
