import React from 'react';

import Box from '../../components/atomic-design/atoms/box';
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
      <Box background="bg-primary-main" width="w-36" height="h-3" radius="rounded-lg" />
    </>
  );
};

export default HomePage;
