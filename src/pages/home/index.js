import React from 'react';

import Box from '../../components/atomic-design/atoms/box';
import Button from '../../components/atomic-design/atoms/button';
import Heading from '../../components/atomic-design/atoms/heading';
import Icon from '../../components/atomic-design/atoms/icon';
import Container from '../../components/atomic-design/atoms/container';
import Text from '../../components/atomic-design/atoms/text';

const HomePage = () => {
  return (
    <Container>
      <Heading variant="h1">HomePage</Heading>
      <Heading variant="h2">HomePage</Heading>
      <Heading variant="h3">HomePage</Heading>
      <Heading variant="h4">HomePage</Heading>
      <Heading variant="h5">HomePage</Heading>
      <Heading variant="h6">HomePage</Heading>
      <Text>lorem mnabsjnasjkaklsjalkjslkajslkajslkjalksjalksj</Text>
      <Icon icon="arrow" />
      <Button onClick={() => console.log('on click!')} ariaLabel="tasting button">
        Fijar
      </Button>
      <Box background="bg-primary-main" width="w-36" height="h-3" radius="rounded-lg" />
    </Container>
  );
};

export default HomePage;
