import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { withInfo } from '@storybook/addon-info';
import { create } from '@storybook/theming';
import { addDecorator, addParameters, configure, load } from '@storybook/react';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Backpack',
      gridCellSize: 12,
    }),
    sortStoriesByKind: true,
  },
  docs: DocsPage,
});

/**
 * `withInfo` must be the first decorator.
 */
// addDecorator(withInfo({ inline: true }));
addDecorator(withA11y);
addDecorator((story) => <div style={{ padding: '2rem' }}>{story()}</div>);

configure(
  require.context('../src/components', true, /\.stories\.tsx$/),
  module
);
