import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

storiesOf('Button Group', module).add('example', () => (
  <>
    <div>
      <ButtonGroup>
        <Button appearance="text">First</Button>
        <Button appearance="text">Second</Button>
      </ButtonGroup>
    </div>
    <div style={{ 'margin-top': '1rem' }}>
      <ButtonGroup>
        <Button appearance="text">Alpha</Button>
        <Button appearance="text">Bravo</Button>
        <Button appearance="text">Charlie</Button>
      </ButtonGroup>
    </div>
  </>
));
