import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

storiesOf('Button Group', module).add('example', () => (
  <>
    <div>
      <ButtonGroup appearance="text">
        <Button>First</Button>
        <Button>Second</Button>
      </ButtonGroup>
    </div>
    <div style={{ 'margin-top': '1rem' }}>
      <ButtonGroup appearance="text">
        <Button>Alpha</Button>
        <Button>Bravo</Button>
        <Button>Charlie</Button>
      </ButtonGroup>
    </div>
  </>
));
