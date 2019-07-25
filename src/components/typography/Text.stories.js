import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';

storiesOf('Text', module).add('with text', () => (
  <Text>Here’s a text component</Text>
));
