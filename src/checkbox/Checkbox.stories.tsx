import React from "react"

import { Checkbox } from "./Checkbox"

export default {
    title: "library/Checkbox",
    component: Checkbox
}

const Template = (args) => <Checkbox {...args}>Engage?</Checkbox>

export const Default = Template.bind({})
Default.args = {}
