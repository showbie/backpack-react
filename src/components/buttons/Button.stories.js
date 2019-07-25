import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

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
    </div>
  ))
  .add('grouped', () => (
    <>
      <Button appearance="text">Primary</Button>
    </>
  ));
