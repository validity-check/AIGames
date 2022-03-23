import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from './header.component';

const metadata = moduleMetadata({
  imports: [],
});

export default {
  title: 'Navigation/Header',
  component: HeaderComponent,
  decorators: [metadata],
} as Meta;

export const Default: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

Default.story = {
  name: 'Header',
};
