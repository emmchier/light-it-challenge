import React from 'react';
import Button from '../../components/atomic-design/atoms/button';
import Icon from '../../components/atomic-design/atoms/icon';

const HomePage = () => {
  return (
    <>
      <h1 className="text-pepito">HomePage</h1>
      <Icon icon="arrow" />
      <Button variant="default">Fijar</Button>
    </>
  );
};

export default HomePage;
