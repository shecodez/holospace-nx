import { Story, Meta } from '@storybook/react';
import { DockUi, DockUiProps } from './dock-ui';

export default {
  component: DockUi,
  title: 'DockUi',
} as Meta;

const Template: Story<DockUiProps> = (args) => <DockUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
