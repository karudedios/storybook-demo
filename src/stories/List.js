import React from 'react';
import { List } from '../containers';
import { Button } from '../components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const items = [ 1, 2, 3, 4, 5 ];
const transformer = n => `${ n } elephant${ n != 1 ? 's' : '' }`;

storiesOf('Containers/List', module)
  .add('should transform items if transform is provided', () => (
    <List items={ items } transform={ transformer } />
  ))
  .add('should render items if no transform is provided', () => (
    <List items={ items } />
  ))
  .add('should render placeholder message if items is undefined', () => (
    <List items={ undefined }/>
  ))
  .add('should render placeholder message if no items in the list', () => (
    <List items={ [] }/>
  ))
  .add('should apply custom `whenEmpty` display', () => (
    <List whenEmpty={ <Button onClick={ action("Nothing to see here, move along.") }> Click here for nothing! </Button> } />
  ));
