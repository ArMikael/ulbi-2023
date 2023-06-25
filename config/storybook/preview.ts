import { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export const preview: Preview = {
  parameters: {
    decorators: [
      StyleDecorator,
      ThemeDecorator,
    ],
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
