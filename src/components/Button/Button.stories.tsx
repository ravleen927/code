import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button'; 

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

// Define the Template type with ButtonProps
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    onClick: () => console.log('Button clicked'),
};
