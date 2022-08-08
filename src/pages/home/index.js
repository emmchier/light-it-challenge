import React, { useContext } from 'react';
import Button from '../../components/atomic-design/atoms/button';
import { MainContext } from '../../context';

// import Box from '../../components/atomic-design/atoms/box';
// import Button from '../../components/atomic-design/atoms/button';
// import Heading from '../../components/atomic-design/atoms/heading';
// import Icon from '../../components/atomic-design/atoms/icon';
// import Container from '../../components/atomic-design/atoms/container';
// import Text from '../../components/atomic-design/atoms/text';

const HomePage = () => {
  const { showActions } = useContext(MainContext);

  return (
    <section className="home-page fade-in">
      {showActions === true && (
        <div className="page-actions absolute flex right-0 mr-5">
          <Button onClick={() => console.log('Fijar')} ariaLabel="Fijar">
            Fijar
          </Button>
          <Button onClick={() => console.log('Borrar')} ariaLabel="Borrar" classes="ml-5">
            Borrar
          </Button>
        </div>
      )}

      {/* <Container>
        <Heading variant="h1">HomePage</Heading>
        <Heading variant="h2">HomePage</Heading>
        <Heading variant="h3">HomePage</Heading>
        <Heading variant="h4">HomePage</Heading>
        <Heading variant="h5">HomePage</Heading>
        <Heading variant="h6">HomePage</Heading>
        <Text>lorem mnabsjnasjkaklsjalkjslkajslkajslkjalksjalksj</Text>
        <Icon icon="arrow" ariaLabel="icono flecha derecha" rotate="rotate-90" />
        <Button onClick={() => console.log('on click!')} ariaLabel="testing button">
          Fijar
        </Button>
        <Box background="bg-primary-main" width="w-36" height="h-3" radius="rounded-lg" />
      </Container> */}
    </section>
  );
};

export default HomePage;
