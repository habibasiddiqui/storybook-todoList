import React from 'react';
import Todolist from '../components/Todolist';

export default {
    title: 'Form',
    component: Todolist
}

const Template = args => <Todolist {...args} />

export const addForm = Template.bind({});

// addForm.args {

// }