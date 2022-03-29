import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header.component';

const metadata = moduleMetadata({
  imports: [MatToolbarModule],
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
