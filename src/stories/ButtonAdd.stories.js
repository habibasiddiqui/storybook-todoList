import React from 'react';
import ButtonAdd from '../components/ButtonAdd';
// import Button from '@material-ui/core/Button';

export default {
    title: 'Add Button',
    component: ButtonAdd
}

export const btnFilled = () => <ButtonAdd variant='contained' color='secondary' name='add-btn' />
export const btnFilled1 = () => <ButtonAdd />
export const btnOutlined = () => <ButtonAdd variant='outlined' color='primary' />

const Template = (args) => <ButtonAdd {...args} />;

export const btnPrimary = Template.bind({});

btnPrimary.args = {
    variant: 'contained',
    color: 'primary'
}