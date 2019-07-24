import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module).add('examples', () => (
  <>
    <Button>Button</Button>
    <Button isDisabled={true}>Button</Button>
    <Button a11yLabel="Helpful text">Button</Button>
  </>
));
