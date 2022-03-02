import React from 'react';
// import loadable from '@loadable/component';

// eslint-disable-next-line
const SomeComponent = (await import('website2/SomeComponent')).default;

console.log('SomeComponent', SomeComponent);

export default () => {
  return (
    <div>
      <h1 onClick={() => alert('website1 is interactive')}>This is website 1</h1>
      <SomeComponent />
    </div>
  );
};
