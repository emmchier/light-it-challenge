import React from 'react';
import { dropdownList } from '../../../../domain/dropdown-list';

import Container from '../../atoms/container';
import Image from '../../atoms/image';
import DropdownButton from '../dropdown-button';

const Navbar = () => (
  <header className="navbar">
    <Container display="flex" alignItems="items-center" justifyContent="justify-between">
      <Image src="/assets/brand-logo.svg" alt="logo de Light-It" />
      <DropdownButton options={dropdownList} onChange={(e) => console.log(e.target.value)} />
    </Container>
  </header>
);

export default Navbar;
