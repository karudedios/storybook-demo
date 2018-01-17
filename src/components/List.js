import React from 'react';

export default (({ items = [] }) =>
  <ul>
    { items.map(content => <li>{ content }</li> ) }
  </ul>
);
