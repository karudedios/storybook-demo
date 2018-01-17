import React from 'react';

export default (({ items = [] }) =>
  <ul>
    { items.map((content, index) => <li key={ index }>{ content }</li> ) }
  </ul>
);
