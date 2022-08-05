import React from 'react';

import Button from '../../components/atomic-design/atoms/button';
import Icon from '../../components/atomic-design/atoms/icon';

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Icon icon="arrow" />
      <Button onClick={() => console.log('on click!')} ariaLabel="tasting button">
        Fijar
      </Button>
    </>
  );
};

export default HomePage;
