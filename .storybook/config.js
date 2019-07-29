import { withA11y } from '@storybook/addon-a11y';
// import { DocsPage } from '@storybook/addon-docs/blocks';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure, load } from '@storybook/react';

// addParameters({ docs: DocsPage });

/**
 * `withInfo` must be the first decorator.
 */
addDecorator(withInfo({ inline: true }));
addDecorator(withA11y);

// load(require.context('../src/components', true, /\.stories\.js$/), module);

function loadStories() {
  let req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
