import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

storiesOf('Components|Buttons', module)
  .add('basic', () => (
    <div>
      <div>
        <Button a11yLabel="Helpful text">Button</Button>
        <Button isDisabled={true}>Disabled</Button>
      </div>
      <div>
        <Button appearance="primary">Primary</Button>
        <Button appearance="primary" isDisabled={true}>
          Disabled
        </Button>
      </div>
      <div>
        <Button appearance="link">Link</Button>
        <Button appearance="link" isDisabled={true}>
          Disabled
        </Button>
      </div>
    </div>
  ))
  .add('grouped', () => (
    <div>
      <ButtonGroup>
        <Button appearance="link">First</Button>
        <Button appearance="link">Second</Button>
      </ButtonGroup>
    </div>
  ));
