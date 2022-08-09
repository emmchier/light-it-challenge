import React, { useContext } from 'react';

import Button from '../../components/atomic-design/atoms/button';
import { MainContext } from '../../context';

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
    </section>
  );
};

export default HomePage;
