import React from 'react'
import Btn from '../components/Btn';

export default {
    title: "Btn",
    component: Btn
}

const Template = (args) => <Btn {...args} />

export const MainBtn = Template.bind({});

MainBtn.args = {
    color: 'red'
}