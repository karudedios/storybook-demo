import React from 'react';
import { List } from '../components';

export default (({ items = [], transform = x => x, whenEmpty = <p>No items to display</p> }) =>
  !(items instanceof Array && items.length > 0)
    ? whenEmpty
    : <List items={ items.map(transform) } />
);
