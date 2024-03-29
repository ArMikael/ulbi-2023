import { Story, StoryContext } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

export const ThemeDecorator = (Story: Story, context: StoryContext) => {
  const { globals: { theme } } = context;

  return (
      <ThemeProvider initialTheme={theme}>
          <div className={classNames('app', theme)}>
              <Story />
          </div>
      </ThemeProvider>
  );
};
