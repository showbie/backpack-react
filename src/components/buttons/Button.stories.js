import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('default', () => (
    <>
      <div>
        <Button a11yLabel="Helpful text">Button</Button>
      </div>
      <div style={{ 'margin-top': '1rem' }}>
        <Button isDisabled={true}>Disabled</Button>
      </div>
      <div style={{ 'margin-top': '1rem' }}>
        <Button isDestructive={true}>Destructive</Button>
      </div>
      <div style={{ 'margin-top': '1rem' }}>
        <Button isDestructive={true} isDisabled={true}>
          Disabled
        </Button>
      </div>
    </>
  ))
  .add('primary', () => (
    <>
      <div>
        <Button appearance="primary">Primary</Button>
      </div>
      <div style={{ 'margin-top': '1rem' }}>
        <Button appearance="primary" isDisabled={true}>
          Disabled
        </Button>
      </div>
    </>
  ))
  .add('text', () => (
    <>
      <div>
        <Button appearance="text">Text</Button>
      </div>
      <div style={{ 'margin-top': '1rem' }}>
        <Button appearance="text" isDisabled={true}>
          Disabled
        </Button>
      </div>
    </>
  ))
  .add('link', () => (
    <>
      <div>
        <Button appearance="link">Link</Button>
      </div>
      <div style={{ 'margin-top': '1rem' }}>
        <Button appearance="link" isDisabled={true}>
          Disabled
        </Button>
      </div>
    </>
  ));
