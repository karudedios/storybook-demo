import React from 'react';
import { Button } from '../components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Components/Button', module)
  .add('with text', () => (
    <Button onClick={ action("Clicked 'Hello Button'") }>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={ action("Clicked 'Emoji Button'") }>😀 😎 👍 💯</Button>
  ));

